import React, { useState } from "react";
import NavStyled from "../../styles/component/NavStyled";
import { Link } from "react-router-dom";

const Nav = () => {
  const [token, setToken] = useState("");
  const getToken = () => {};

  return (
    <NavStyled.NavBody>
      <NavStyled.MenuStyled>
        <ul>
          <li>
            <Link to="/IntroPage">CRIT</Link>
          </li>
          <li>
            <Link to="/MainPage">메인</Link>
          </li>
          <li>
            <Link to="/ChallengePage">챌린지</Link>
          </li>
          <li>
            <Link to="/CommunityPage">커뮤니티</Link>
          </li>
        </ul>
      </NavStyled.MenuStyled>
      <NavStyled.UserStyled>
        <ul>
          <li>
            <Link to="/SignUpPage">회원가입</Link>
          </li>
          <li>
            <Link to="/LoginPage">로그인</Link>
          </li>
        </ul>
      </NavStyled.UserStyled>
    </NavStyled.NavBody>
  );
};

export default Nav;
