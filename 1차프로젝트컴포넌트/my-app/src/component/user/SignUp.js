import { useNavigate } from "react-router-dom";

import {
  Div,
  From,
  Label,
  Span,
  Input,
  ButtonContainer,
  SignUpbutton,
  CheckButton,
} from "../../styles/pages/SignUpPageStyle";
const SignUp = () => {
  return (
    <Div>
      <h1>CRIT</h1>
      <From>
        <Span>
          <Label>이메일</Label>
          <Input placeholder="이메일형식(영문어아이디+ @이메일주소)" />
          <CheckButton>중복확인</CheckButton>
        </Span>
        <Span>
          <Label>비밀번호</Label>
          <Input placeholder="비밀번호는 8자이상 20자이하" />
        </Span>
        <Span>
          <Label>비밀번호 확인</Label>
          <Input />
        </Span>
        <Span>
          <Label>이름</Label>
          <Input />
        </Span>
        <Span>
          <Label>닉네임</Label>
          <Input placeholder="2자 이상 10자 이하" />
          <CheckButton>중복확인</CheckButton>
        </Span>
      </From>
      <ButtonContainer>
        <SignUpbutton>회원가입</SignUpbutton>
      </ButtonContainer>
    </Div>
  );
};

export default SignUp;
