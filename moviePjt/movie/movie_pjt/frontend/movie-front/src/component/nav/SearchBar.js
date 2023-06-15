import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ movies }) {
  // 검색창 입력값 담기
  const [search, setSearch] = useState("");
  // 검색창 입력값 변화 감지
  const onChange = (event) => {
    setSearch(event.currentTarget.value);
  };
  const navigate = useNavigate();
  // 검색 함수
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
  // KeyPress Enter 함수
  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      SearchMovie();
    }
  };
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={onChange}
        onKeyPress={handleOnKeyPress}
      />
      <button onClick={SearchMovie}>🔍</button>
    </div>
  );
}
