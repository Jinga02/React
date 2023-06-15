import { useState, useEffect } from "react";
import NowMoive from "../component/NowMovie";

function Home() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const API_KEY = "378ee398cd9d112a7f0446d50d2d4472";
  const NOW_PLAYING_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR`;
  const getMovies = async () => {
    try {
      const response = await fetch(NOW_PLAYING_URL);
      const json = await response.json();
      setMovies(json.results);
      setLoading(true);
    } catch (error) {
      console.log("에러 발생", error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies[0]);

  return (
    <div>
      {loading ? (
        <div>
          {movies.map((movie) => (
            <NowMoive key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        "Loading...."
      )}
    </div>
  );
}

export default Home;
