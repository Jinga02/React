import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
export default function SearchBar({ movies }) {
  const [search, setSearch] = useState("");
  const onChange = (event) => {
    setSearch(event.currentTarget.value);
  };
  const navigate = useNavigate();

  const SearchMovie = () => {
    const filteredMovies = movies.filter((movie) =>
      movie.title
        .replace(" ", "")
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase().replace(" ", "")),
    );
    if (filteredMovies.length === 0) {
      alert("일치하는 영화가 없습니다.");
    } else {
      console.log(filteredMovies);
      navigate("./SearchPage", { state: filteredMovies });
      setSearch("");
    }
  };

  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      SearchMovie();
    }
  };

  return (
    <div id="search-container">
      <div id="search-icon">
        <FaSistrix />
      </div>
      <input
        id="search-input"
        type="search"
        value={search}
        onChange={onChange}
        onKeyPress={handleOnKeyPress}
        placeholder="      검색"
      />
    </div>
  );
}
