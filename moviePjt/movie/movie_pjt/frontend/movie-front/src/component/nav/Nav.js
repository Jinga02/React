import { Link, useNavigate } from "react-router-dom";
import "../../CSS/Nav.css";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function Nav({ movies }) {
  // 햄버거 메뉴
  const [userMenu, setUserMenu] = useState(false);

  const logOut = () => {
    localStorage.removeItem("userToken");
  };
  return (
    <div id="Nav">
      <Link to={"/main"}>
        <div id="logo">
          <img
            src="https://github.com/Jinga02/Algorithm/assets/110621233/035bdd8f-afac-46ee-8d85-c08b6ecae0cf"
            alt="로고"
          />
        </div>
      </Link>

      <div id="menu">
        <h1>menu</h1>
        <SearchBar movies={movies} />
      </div>
      <div id="user"></div>
    </div>
  );
}
