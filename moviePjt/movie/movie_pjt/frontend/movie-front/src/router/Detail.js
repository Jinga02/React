// import axios from "axios";
import "../CSS/router/Detail.css";
import { useState, useEffect, useCallback } from "react";
import { useLinkClickHandler, useLocation } from "react-router-dom";
import CreateReview from "../component/review/CreateReview";
import ReviewList from "../component/review/ReviewList";
import YouTube from "../component/movies/Youtube";
import axios from "axios";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
export default function Detail() {
  const token = JSON.parse(localStorage.getItem("user")).token;
  const userId = JSON.parse(localStorage.getItem("user")).userId;
  // const { data: userData } = useSWR('/api/users', fetcher)
  const [movie, setMovie] = useState({});
  const [update, setUpdate] = useState(0);
  const location = useLocation();
  const movieData = location.state.movieData;
  // 좋아요
  const [like, setLike] = useState(false);
  const likeMovie = useCallback(() => {
    axios
      .post(
        `http://127.0.0.1:8000/movies/like_movie/${movie.id}/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() => {
        setLike(!like);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  // 좋아요 영화 가져오기);
  const getLikeMovie = useCallback(() => {
    axios({
      method: "get",
      url: `http://127.0.0.1:8000/movies/${userId}/liked_movies/`,
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        const movieLike = res.data.filter((thisMovie) => {
          return thisMovie.id == movieData.id;
        });
        const movieLikesId = movieLike[0].id;
        if (movieLikesId == movie.id) {
          setLike(false);
        } else {
          setLike(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const getMovie = () => {
    setMovie(movieData);
  };
  // 리뷰리스트 리렌더링용
  const updateReview = () => {
    setUpdate((updateReview) => updateReview + 1);
  };

  useEffect(() => {
    getMovie();
    getLikeMovie();
  }, []);

  return (
    <div id="Detail">
      <div id="detailMovie">
        <div id="poster">
          <img
            id="posterImg"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="영화 포스터"
          />
        </div>
        <div id="information">
          <div id="youtube">
            <YouTube movie={movie} />
          </div>
          <div id="movieInf">
            <h1>{movie.title}</h1>
            {like ? (
              <i
                className="fa fa-heart"
                style={{ fontSize: "2em", cursor: "pointer" }}
                onClick={likeMovie}
              />
            ) : (
              <i
                className="fa fa-heart-o"
                style={{ fontSize: "2em", cursor: "pointer" }}
                onClick={likeMovie}
              />
            )}

            <h2>개봉일 {movie.release_date}</h2>
            <h2>
              평점 : {movie.vote_average} 투표수 : {movie.vote_count}표
            </h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
      <div id="review">
        <div id="create">
          <CreateReview movie={movie} updateReview={updateReview} />
        </div>
        <div id="list">
          <ReviewList movie={movie} key={update} />
        </div>
      </div>
    </div>
  );
}
