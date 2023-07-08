import React, { useEffect, useState, useCallback } from "react";
import useInput from "../../hooks/useInput";
import { useParams } from "react-router-dom";
import axios from "axios";

const GuestBook = () => {
  const API_URL = "http://127.0.0.1:8000";
  // 로그인 유저
  const user = JSON.parse(localStorage.getItem("user"));
  // 프로필 유저 id
  const { id } = useParams();
  // 프로필 유저 정보
  const [profileUser, setProfileUser] = useState({});
  const getUserProfile = () => {
    axios({
      method: "GET",
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

  // 방명록 달기
  const [content, onChangeContent] = useInput("");
  const createGuestBook = useCallback(() => {
    axios({
      method: "POST",
      url: `${API_URL}/comments/profileuser/${user.userId}/comment/`,
      headers: {
        Authorization: `Token ${user.token}`,
      },
      data: {
        profile: profileUser.id,
        user: user.userId,
        content: content,
      },
    })
      .then((res) => {
        getGuestBook();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // 방명록 가져오기
  const [guestBook, setGueskBook] = useState([]);
  const getGuestBook = useCallback(() => {
    axios({
      method: "GET",
      url: `${API_URL}/comments/profileuser/${user.userId}/comments/`,

      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then((res) => {
        setGueskBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const deleteGuestBook = (guestBookId) => {
    axios({
      method: "DELETE",
      url: `${API_URL}/comments/profileuser/${profileUser.id}/comment/${guestBookId}/`,
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then(() => {
        getGuestBook();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUserProfile();
    getGuestBook();
  }, []);

  return (
    <div>
      <textarea
        cols={70}
        rows={10}
        value={content}
        onChange={onChangeContent}
      />
      <button onClick={createGuestBook}>작성</button>
      <ul>
        {guestBook.map((guestbook) => (
          <li key={guestbook.id} style={{ color: "white" }}>
            {guestbook.content}
            <button onClick={() => deleteGuestBook(guestbook.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestBook;
