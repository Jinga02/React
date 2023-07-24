import React, { useState } from "react";
import { NavBar, Menu, User } from "../../styles/Common";
import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const token = localStorage.getItem("token");
  const nickName = localStorage.getItem("nickName");
  const [view, setView] = useState(false);

  return (
    <NavBar>
      <Menu>
        <ul>
          <li>
            <NavLink to="/IntroPage">CRIT</NavLink>
          </li>
          <li>
            <NavLink to="/MainPage">메인</NavLink>
          </li>
          <li>
            <NavLink to="/ChallengePage">챌린지</NavLink>
          </li>
          <li>
            <NavLink to="/ChallengeCommunityPage">커뮤니티</NavLink>
          </li>
        </ul>
      </Menu>
      <User>
        <ul
          onClick={() => {
            setView(!view);
          }}
        >
          {token ? (
            <>
              <li>
                <BiUserCircle size={35} style={{ cursor: "pointer" }} />{" "}
              </li>
              <li>
                <Link to="/">{view && nickName}</Link>
              </li>
              <li>{view && nickName}</li>
            </>
          ) : (
            <Link to="/LoginPage">로그인</Link>
          )}
        </ul>
      </User>
    </NavBar>
  );
};

export default Nav;
