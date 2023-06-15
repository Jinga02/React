import { useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/movie/Movies.css";
export default function SearchMovies({ movie }) {
  const [isCheck, setIsCheck] = useState(true);

  const change = () => {
    setIsCheck(!isCheck);
    console.log(isCheck);
  };
  return (
    <div id="Movies">
      {isCheck ? (
        <div id="MoviesPoster" onMouseEnter={change}>
          <img
            id="moviePoster"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="포스터"
          />
        </div>
      ) : (
        <div id="MoviesInf" onMouseLeave={change}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <Link to={`./${movie.id}`} state={{ movieData: movie }}>
            <button>상세보기</button>
          </Link>
        </div>
      )}
    </div>
  );
}
