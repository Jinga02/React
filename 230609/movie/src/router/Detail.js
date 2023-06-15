import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  // useParams의 id란 이름의 값을 가져온다.
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
  };
  console.log(getMovie);
  useEffect(() => {
    getMovie();
  }, []);

  // console.log(movie);

  return (
    <div>
      <h1>Detail</h1>
      <img src={movie.medium_cover_image} alt="" />
      <div>
        <h2>{movie.title}</h2>
        <h4>
          평점 : {movie.rating}점 상영시간 : {movie.runtime}분
        </h4>
      </div>
      <h4>{movie.genres.map((genre) => `${genre} / `)}</h4>
      <p>{movie.description_full}</p>
    </div>
  );
}
