import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchMovies from "../component/movies/SearchMovies";
import "../CSS/main.css";
export default function SearchPage() {
  // filteredMovies 받아오기
  const location = useLocation();
  const movies = location.state;
  const [loading, setLoading] = useState(false);

  const check = () => {
    if (movies.length > 0) {
      setLoading(true);
    }
  };

  useEffect(() => {
    check();
  });

  return (
    <div id="main">
      {loading ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <SearchMovies movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        "Loading...."
      )}
    </div>
  );
}
