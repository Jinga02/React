import "../CSS/profile/profile.css";
import fetcher from "../utils/fetcher";
import useSWR from "swr";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // const { data: likeMovie } = useSWR(
  //   `http://127.0.0.1:8000/movies/like_movie/${movieId}/`,
  //   fetcher,
  // );

  // likeMovie(context, movieId){
  //   axios({
  //     method: 'post',
  //     url: `${API_URL}/movies/like_movie/${movieId}/`,
  //     headers: {
  //       Authorization: `Token ${context.state.token.key}`
  //     }
  //   })
  //   .then((res)=>{
  //     // const is_liked = res.data.is_liked
  //     // const count = res.data.count
  //     // const userId = res.data.user_id
  //     // const movieId = res.data.movie_id
  //     console.log(res.data)
  //     // context.commit('UPDATE_MOVIE_LIKE', )
  //     // location.reload()
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // },

  return (
    <div
      id="first"
      style={{
        color: "white",
      }}
    >
      <div id="">
        <h1>유저 소개</h1>
        <h1>{user.username}</h1>
      </div>
      <div id="">
        <h1>유저가 좋아하는 영화</h1>
      </div>
      <div id="">
        <h1>방명록</h1>
      </div>
    </div>
  );
};

export default Profile;
