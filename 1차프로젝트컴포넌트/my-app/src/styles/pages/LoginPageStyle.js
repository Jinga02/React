import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Form = styled.form``;
export const Span = styled.span`
  display: block;
  margin: 20px 0;
  text-align: center;
`;

export const Input = styled.input`
  type: text;
  width: 60%;
  height: 50px;
  border-radius: 5px;
`;

export const LoginButton = styled.button`
  background-color: #33ff00;
  border: none;
  width: 40%;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 1000;
`;

export const LinkSignUp = styled(Link)`
  text-decoration: none;
  color: blue;
  text-align: center;
`;

export const KakaoLoginButton = styled.img`
  width: 40%;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;
export const NaverLoginButton = styled.img`
  width: 40%;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;
