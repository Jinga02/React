// 라이브러리
import { useState, useEffect } from "react";
import axios from "axios";
// 컴포넌트
import Movies from "../component/movies/Movies";
// 스타일
import "../CSS/main.css";

export default function Main({ movies }) {
  const [loading, setLoading] = useState(false);
  const [nowMovies, setNowMovies] = useState([]);
  const API_URL = "http://127.0.0.1:8000";
  // const youtube = `https://www.youtube.com/embed/${movie.youtube_key}?autoplay=1&mute=1&amp;playlist=${movie.youtube_key}&loop=1&controls=0&modestbranding=1`;

  const getNowMovies = () => {
    axios({
      method: "GET",
      url: `${API_URL}/movies/now/`,
    }).then((response) => {
      setNowMovies(response.data);
    });
  };

  const check = () => {
    if (movies.length > 0) {
      setLoading(true);
    }
  };

  useEffect(() => {
    check();
    getNowMovies();
  }, []);

  return (
    <div id="main">
      <div id="window">
        <iframe
          frameborder="0"
          allowfullscreen
          // style="width: 100%; height: 400px"
          src={youtube}
        ></iframe>
      </div>
      <div id="movies">
        {loading ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Movies movie={movie} />
              </li>
            ))}
          </ul>
        ) : (
          "Loading...."
        )}
      </div>
    </div>
  );
}
