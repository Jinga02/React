import React from "react";
import KakaoLogin from "../component/user/socialLogin/KakaoLogin";
import NaverLogin from "../component/user/socialLogin/NaverLogin";
import {
  Div,
  Form,
  Span,
  Input,
  LoginButton,
  LinkSignUp,
} from "../styles/pages/LoginPageStyle";

const LoginPage = () => {
  return (
    <Div>
      <h1>CRIT</h1>
      <Form>
        <Span>
          <Input placeholder="아이디" />
        </Span>
        <Span>
          <Input placeholder="비밀번호" />
        </Span>
      </Form>
      <Span>
        <LoginButton>로그인</LoginButton>
      </Span>
      <Span>
        <h3>혹시 가입된 아이디가 없으신가요?</h3>
        <LinkSignUp to="/SignUpPage">회원가입</LinkSignUp>
      </Span>
      <Span>
        <NaverLogin />
        <KakaoLogin />
      </Span>
    </Div>
  );
};

export default LoginPage;
