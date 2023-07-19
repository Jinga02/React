import Navstyles from "../../styles/component/nav/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div id="nav">
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
      </div>
      <div id="user">
        <ul>
          <li>
            <Link to="/SignUpPage">회원가입</Link>
          </li>
          <li>
            <Link to="/LoginPage">로그인</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
