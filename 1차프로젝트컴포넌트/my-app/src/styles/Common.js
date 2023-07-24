import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

//Nav
export const NavBar = styled.nav`
  display: flex;
  // padding: 10px;
  justify-content: space-between;
  background-color: black;
  font-size: 20px;
`;

export const Menu = styled.div`
  width: 60%;

  ul {
    list-style: none;
    display: flex;
    padding: 0;
  }

  ul li {
    margin: 0px 10%;
    color: white;
  }

  // NavLink 스타일 설정
  ul li a {
    text-decoration: none;
    color: white;
  }

  ul li a:hover {
    color: #ff007a;
  }

  // 현재 페이지와 링크가 일치할 때의 스타일
  ul li a.active {
    // color: #ff007a;
    color: gray;
  }
`;

export const User = styled.div`
  width: 10%;
  font-size: 20px;
  cursor: pointer;

  ul {
    list-style: none;
    display: flex;
    padding: 0;
  }
  ul li {
    margin: 0px 10%;
    text-decoration: none;
  }
  ul a {
    text-decoration: none;
    color: white;
  }
  ul li a:hover {
    color: #ff007a;
  }
`;
