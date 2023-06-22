import { Link } from "react-router-dom";

export default function Movie({ coverImg, id, title, summary, genres }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt="" />
      </Link>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}
