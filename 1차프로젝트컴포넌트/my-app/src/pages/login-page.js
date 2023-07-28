import React, { useCallback, useState } from "react";
import SKakaoLoginButton from "../component/user/socialLogin/KakaoLogin";
import SNaverLoginButton from "../component/user/socialLogin/NaverLogin";
import useInput from "../hooks/useInput";
import {
  SLoginPageWrapper,
  SForm,
  SSpan,
  SLoginButton,
  SMoveSignUp,
  Error,
} from "../styles/pages/SLoginPage";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../slice/UserSlice";
import { persistor } from "../store";

const LoginPage = () => {
  const [logInError, setLogInError] = useState(false);
  const [id, onChangeid] = useInput("");
  const [password, onChangePassword] = useInput("");
  const nav = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post("http://localhost:8080/api/auth/login", {
          id,
          password,
        })
        .then((res) => {
          dispatch(
            setUser(
              res.data.id,
              res.data.nickname,
              res.data.accessToken,
              res.data.refreshToken
            )
          );
          persistor.flush(); // 상태를 영구적으로 저장
          Swal.fire({
            position: "center",
            icon: "success",
            title: "로그인 완료",
            text: "CRIT 시작~",
            showConfirmButton: false,
            timer: 1500,
            background: "#272727",
            color: "white",
            // width: "500px",
            // 먼지
            // imageUrl: 'https://unsplash.it/400/200',
            // imageWidth: 400,
            // imageHeight: 200,
            // imageAlt: 'Custom image',
          });

          nav("/MainPage");
        })
        .catch((error) => {
          console.log(error);
          setLogInError(error.response?.status === 400);
        });
    },
    [id, password]
  );

  return (
    <SLoginPageWrapper>
      <SForm onSubmit={onSubmit}>
        <SSpan>
          <input
            type="id"
            id="id"
            name="id"
            value={id}
            onChange={onChangeid}
            placeholder="아이디"
          />
        </SSpan>
        <SSpan>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호"
          />
        </SSpan>
        <SSpan>
          <SLoginButton>로그인</SLoginButton>
        </SSpan>
      </SForm>
      {logInError && (
        <Error>이메일 또는 비밀번호 조합이 일치하지 않습니다.</Error>
      )}
      <SSpan>
        <h3>혹시 가입된 아이디가 없으신가요?</h3>
        <SMoveSignUp to="/SignUpPage">회원가입</SMoveSignUp>
      </SSpan>
      <SSpan>
        <SNaverLoginButton />
        <SKakaoLoginButton />
      </SSpan>
    </SLoginPageWrapper>
  );
};

export default LoginPage;
