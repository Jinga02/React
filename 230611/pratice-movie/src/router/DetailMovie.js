import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function DetailMovie() {
  const { id } = useParams();
  const API_KEY = "378ee398cd9d112a7f0446d50d2d4472";
  const DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`;
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    try {
      const response = await fetch(DETAIL_URL);
      const json = await response.json();
      setMovie(json);
    } catch (error) {
      console.log("에러 발생", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);
  e;

  console.log(movie);
  return (
    <div className="DetailMovie">
      <div className="poster">
        <img
          id="poster"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="영화 포스터"
        />
      </div>
      <div className="explanation">
        <h1>
          {movie.original_title}({movie.title})
        </h1>
        <div id="voteGenres">
          <h3>
            평점 : {movie.vote_average}점(참여인원 : {movie.vote_count}명)
          </h3>
          <h3>상영시간 : {movie.runtime}분</h3>
          <span id="genres">
            <h3>장르 :</h3>
            {movie.genres ? (
              movie.genres.map((genre) => (
                <h4 id="genre" key={genre.id}>
                  {genre.name}
                </h4>
              ))
            ) : (
              <span>Loading...</span>
            )}
          </span>
        </div>
        <p>{movie.overview}</p>
      </div>
      <Link to="/">
        <button id="Home">Home</button>
      </Link>
    </div>
  );
}

export default DetailMovie;
