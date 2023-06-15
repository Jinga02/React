import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 설치한 패키지

import axios from "axios";
export default function LoginModal() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPwHandler = (event) => {
    setPw(event.currentTarget.value);
  };

  const navigate = useNavigate();

  // axios
  const onSubmitForm = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/accounts/login/",
      data: {
        username: id,
        password: pw,
      },
    })
      .then((response) => {
        console.log(response);
        navigate("/main");
        localStorage.setItem("userToken", response.data.key);
      })
      .catch((error) => {
        alert("존재하지 않는 회원정보 입니다.");
        console.log(error); // 에러 처리
        setId("");
        setPw("");
      });
  };

  return (
    <div id="loginModal">
      <h1>로그인</h1>
      <div id="loginInput">
        <form onSubmit={onSubmitForm}>
          <span>
            <label htmlFor="loginId">ID : </label>
            <input type="text" id="loginId" value={id} onChange={onIdHandler} />
          </span>
          <span>
            <label htmlFor="loginPw"> PW : </label>
            <input
              type="password"
              id="loginPw"
              value={pw}
              onChange={onPwHandler}
              placeholder="최소 8자 이상"
            />
          </span>
          <div id="loginBnt">
            <button> 로그인</button>
          </div>
        </form>
      </div>
    </div>
  );
}
