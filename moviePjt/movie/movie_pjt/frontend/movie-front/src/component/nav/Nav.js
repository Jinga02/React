import { Link } from "react-router-dom";
import "../../CSS/Nav.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import LogOut from "./LogOut";
import { FaUserCircle } from "react-icons/fa";
export default function Nav({ movies }) {
  // 햄버거 메뉴
  const [view, setView] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")) || { username: " " }; // 기본값 설정

  return (
    <div id="Nav">
      <div id="logo">
        <Link to={"/main"}>
          <img
            src="https://github.com/Jinga02/Algorithm/assets/110621233/035bdd8f-afac-46ee-8d85-c08b6ecae0cf"
            alt="로고"
          />
        </Link>
      </div>

      <div id="menu">
        <SearchBar id="searchBar" movies={movies} />
      </div>
      <div id="user">
        <ul
          onClick={() => {
            setView(!view);
          }}
        >
          <li>
            <FaUserCircle size={25} />
          </li>
          <li>
            <Link to="/profile">{view && user.username}</Link>
          </li>
          <li>{view && <LogOut />}</li>
        </ul>
      </div>
    </div>
  );
}
