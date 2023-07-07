import axios from "axios";
import useInput from "../../hooks/useInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserInf = () => {
  const API_URL = "http://127.0.0.1:8000";
  // 로그인한 유저
  const user = JSON.parse(localStorage.getItem("user"));
  // 프로필 유저 id
  const { id } = useParams();
  // 프로필 유저 정보
  const [profileUser, setProfileUser] = useState({});
  const [selfInt, onChangeselfInt, setSelfInt] = useInput("");
  const [savedSelfInt, setSavedSelfInt] = useState(""); // 추가된 상태

  // 자기소개 수정
  const [modifyInf, setModifyInf] = useState(false);
  const onClickModify = () => {
    setModifyInf(!modifyInf);
  };
  // 프로필 유저 정보
  const getUserProfile = () => {
    axios({
      method: "get",
      url: `${API_URL}/accounts/profile/${id}/`,
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then((res) => {
        setProfileUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getSelfInt = () => {
    axios({
      method: "GET",
      url: `${API_URL}/accounts/profile/${id}/introduce/`,
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then((res) => {
        setSavedSelfInt(res.data); // 서버로부터 받은 내용을 savedSelfInt에 저장
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const createSelfInt = () => {
    axios({
      method: "PUT",
      url: `${API_URL}/accounts/profile/${user.userId}/introduce/`,
      headers: {
        Authorization: `Token ${user.token}`,
      },
      data: {
        introduce: selfInt,
      },
    })
      .then(() => {
        setSavedSelfInt(selfInt); // selfInt를 savedSelfInt에 저장
        setModifyInf(false);
        setSelfInt(""); // selfInt를 빈 문자열로 설정
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSelfInt();
    getUserProfile();
  }, []);

  return (
    <div>
      {user.userId === profileUser.id ? (
        <>
          {modifyInf && (
            <textarea
              value={selfInt}
              onChange={onChangeselfInt}
              rows={10}
              cols={70}
              style={{ whiteSpace: "pre-wrap" }}
            ></textarea>
          )}
          {modifyInf ? (
            <button onClick={createSelfInt}>작성</button>
          ) : (
            <>
              <p style={{ whiteSpace: "pre-wrap" }}>{savedSelfInt}</p>
              <button onClick={() => setModifyInf(true)}>수정</button>
            </>
          )}
        </>
      ) : (
        <p style={{ whiteSpace: "pre-wrap" }}>{savedSelfInt}</p>
      )}
    </div>
  );
};

export default UserInf;
