import styled from "styled-components";

//Nav
export const NavBar = styled.nav`
  padding: 10px;
  display: flex;
  background-color: black;
`;
export const MenuStyled = styled.div`
  width: 80%;
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

export const UserStyled = styled.div`
  width: 20%;

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
