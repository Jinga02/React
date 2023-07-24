import React, { useState } from "react";
import { NavBar, MenuStyled, UserStyled } from "../../styles/Common";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavBar>
      <MenuStyled>
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
            <Link to="/ChallengeCommunityPage">커뮤니티</Link>
          </li>
        </ul>
      </MenuStyled>
      <UserStyled>
        <ul>
          <li>
            <Link to="/SignUpPage">회원가입</Link>
          </li>
          <li>
            <Link to="/LoginPage">로그인</Link>
          </li>
        </ul>
      </UserStyled>
    </NavBar>
  );
};

export default Nav;
