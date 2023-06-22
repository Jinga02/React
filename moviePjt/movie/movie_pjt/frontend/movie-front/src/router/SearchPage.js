import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../CSS/router/SearchPage.css";
export default function SearchPage() {
  // filteredMovies 받아오기
  const location = useLocation();
  const movies = location.state;

  // 카드 뒤집기
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const handleMouseEnter = (movieId) => {
    setHoveredMovie(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  return (
    <div id="main">
      <ul>
        {movies.map((movie) => {
          return (
            <li
              id="movieLi"
              onMouseEnter={() => handleMouseEnter(movie.id)}
              onMouseLeave={handleMouseLeave}
              key={movie.id}
            >
              {hoveredMovie === movie.id ? (
                <div id="inf">
                  <h2>{movie.title}</h2>
                  <h3>개봉일 {movie.release_date}</h3>
                  <h3>
                    평점 : {movie.vote_average} 투표수 : {movie.vote_count}표
                  </h3>
                  <p>
                    {movie.overview
                      ? movie.overview.split(" ").length > 50
                        ? movie.overview.split(" ").slice(0, 50) + "..."
                        : movie.overview
                      : "줄거리가 없습니다..."}
                  </p>
                  <Link to={`/main/${movie.id}`} state={{ movieData: movie }}>
                    <button>상세보기</button>
                  </Link>
                </div>
              ) : (
                <div id="poster">
                  <img
                    id="posterImg"
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="영화 포스터"
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
