import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LikeUser = () => {
  const API_URL = "http://127.0.0.1:8000";
  // 로그인 유저
  const user = JSON.parse(localStorage.getItem("user"));
  // 프로필 유저 id
  const { id } = useParams();
  // 프로필 유저 정보
  const [profileUser, setProfileUser] = useState({});
  const getUserProfile = () => {
    axios({
      method: "GET",
      url: `${API_URL}/accounts/profile/${id}/`,
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then((res) => {
        setProfileUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 유저 팔로우
  const [follower, setFollower] = useState([]);
  const [following, setFollowing] = useState([]);

  const [like, setLike] = useState(false);
  const likeUser = () => {
    axios({
      method: "POST",
      url: `${API_URL}/accounts/profile/${profileUser.username}/follow/`,
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then(() => {
        setLike(!like);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getFollower = () => {
    axios({
      method: "GET",
      url: `${API_URL}/accounts/profile/${id}/follower/`,
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then((res) => {
        setFollower(res.data);

        res.data.map((like) => {
          if (like.id == user.userId) {
            setLike(true);
          }
        });
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFollowing = () => {
    axios({
      method: "GET",
      url: `${API_URL}/accounts/profile/${id}/following/`,
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then((res) => {
        setFollowing(res.data);
        console.log(res.data);
        // res.data.map((like) => {
        //   if (like.id == user.userId) {
        //     setLike(true);
        //   }
        // });
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserProfile();
    getFollower();
    getFollowing();
  }, []);
  return (
    <>
      <h1>{profileUser.username}</h1>
      <div id="follower" style={{ display: "flex" }}>
        <h2>Follower : </h2>
        {follower.map((follow) => (
          <h4 key={follow.id}>{follow.username}</h4>
        ))}
      </div>
      <div id="following" style={{ display: "flex" }}>
        <h2>Following : </h2>
        {following.map((following) => (
          <h4>{following.username}</h4>
        ))}
      </div>
      <div style={{ margin: "10px" }}>
        {profileUser.id !== user.userId ? (
          like ? (
            <i
              className="fa fa-heart"
              style={{ fontSize: "2em", cursor: "pointer" }}
              onClick={likeUser}
            />
          ) : (
            <i
              className="fa fa-heart-o"
              style={{ fontSize: "2em", cursor: "pointer" }}
              onClick={likeUser}
            />
          )
        ) : null}
      </div>
    </>
  );
};

export default LikeUser;
