import React, { useState } from "react";
import { NavBar, Menu, User } from "../../styles/Common";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
const Nav = () => {
  const token = localStorage.getItem("token");
  const nickName = localStorage.getItem("nickName");
  const [view, setView] = useState(false);

  return (
    <NavBar>
      <Menu>
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
      </Menu>
      <User>
        {token ? (
          <ul
            onClick={() => {
              setView(!view);
            }}
          >
            <li>
              <BiUserCircle size={35} style={{ cursor: "pointer" }} />{" "}
            </li>
            <li>
              <Link to="/">{view && nickName}</Link>
            </li>
            <li>{view && nickName}</li>
          </ul>
        ) : (
          <Link to="/LoginPage">로그인</Link>
        )}
      </User>
    </NavBar>
  );
};

export default Nav;
