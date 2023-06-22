import { useState, useEffect } from "react";
import Movie from "../component/Movie";
import PropTypes from "prop-types";

export default function Home() {
  const [loading, setLodaing] = useState(true);
  const [movies, setMovies] = useState([]);
  // 영화 api 가져오기
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year",
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLodaing(false);
  };
  // 영화 상세보기

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
