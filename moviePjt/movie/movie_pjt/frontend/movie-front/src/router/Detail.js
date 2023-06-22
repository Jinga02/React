// import axios from "axios";
import "../CSS/router/Detail.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CreateReview from "../component/review/CreateReview";
import ReviewList from "../component/review/ReviewList";
import YouTube from "../component/movies/Youtube";

export default function Detail() {
  const [movie, setMovie] = useState({});
  // 리뷰리스트 리렌더링용
  const [update, setUpdate] = useState(0);
  const location = useLocation();
  const movieData = location.state.movieData;

  const getMovie = () => {
    setMovie(movieData);
  };

  // 리뷰리스트 리렌더링용
  const updateReview = () => {
    setUpdate((updateReview) => updateReview + 1);
  };

  useEffect(() => {
    getMovie();
  }, []);
  // console.log(movie);
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
