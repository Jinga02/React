// import axios from "axios";
import "../CSS/movie/Detail.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const [movie, setMovie] = useState({});

  const location = useLocation();
  const movieData = location.state.movieData;
  const youtube = `https://www.youtube.com/embed/${movie.youtube_key}?autoplay=1&mute=1&amp;playlist=${movie.youtube_key}&loop=1&controls=0&modestbranding=1`;

  const getMovie = () => {
    setMovie(movieData);
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
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
          <iframe
            frameborder="0"
            allowfullscreen
            // style="width: 100%; height: 400px"
            src={youtube}
          ></iframe>
          <h1>{movie.title}</h1>
          <h2>개봉일 {movie.release_date}</h2>
          <h2>
            평점 : {movie.vote_average} 투표수 : {movie.vote_count}표
          </h2>
          <p>{movie.overview}</p>
        </div>
      </div>
      <div id="review">
        <div id="create">
          <h1>review부분 입니다</h1>
        </div>
        <div id="list">
          <h1>list부분입니다</h1>
        </div>
      </div>
    </div>
  );
}
