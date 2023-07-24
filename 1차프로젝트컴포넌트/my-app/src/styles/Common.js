import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

//Nav
export const NavBar = styled.nav`
  display: flex;
  padding: 10px;
  justify-content: space-between; /* 오른쪽 끝에 배치 */
  ${"" /* background-color: black; */}
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
  ul li a {
    text-decoration: none;
  }
  ul li a:link,
  a:visited,
  a:active {
    color: white;
  }
  a:hover {
    color: #ff007a;
  }
`;

export const User = styled.div`
  width: 10%;
  ${"" /* display: flex; */}
  font-size: 20px;
  cursor: pointer;

  ul {
    list-style: none;
    display: flex;
    padding: 0;
  }
  ul li {
    margin: 0px 10%;
  }
  ul li a {
    text-decoration: none;
  }
  ul li a:link,
  a:visited,
  a:active {
    color: white;
  }
  a:hover {
    color: #ff007a;
  }
`;

export const Font = createGlobalStyle`
  @import url('https://webfontworld.github.io/pretendard/Pretendard.css');

  body {
    font-family: 'Pretendard', sans-serif;
  }
`;
