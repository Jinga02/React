import "../CSS/profile/profile.css";
import LikeMovies from "../component/profile/LikeMovie";
import UserInf from "../component/profile/UserInf";

const Profile = () => {
  return (
    <div
      id="first"
      style={{
        color: "white",
      }}
    >
      <div id="">
        <h1>유저 소개</h1>
        <UserInf />
      </div>
      <div id="">
        <h1>유저가 좋아하는 영화</h1>
        <LikeMovies />
      </div>
      <div id="">
        <h1>방명록</h1>
      </div>
    </div>
  );
};

export default Profile;
