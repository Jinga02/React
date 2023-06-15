import { Link } from "react-router-dom";
function NowMoive({ movie }) {
  // 줄거리 길이 제한
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.substr(0, maxLength);
    return (
      truncatedText.substr(
        0,
        Math.min(truncatedText.length, truncatedText.lastIndexOf(" ")),
      ) + "..."
    );
  }
  const truncatedOverview = truncateText(movie.overview, 200);

  return (
    <div className="nowMovie">
      <Link to={`./movie/${movie.id}`}>
        <img
          id="poster"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="영화 포스터"
        />
      </Link>

      <h2>{movie.title}</h2>
      <p>{truncatedOverview}</p>
    </div>
  );
}

export default NowMoive;
