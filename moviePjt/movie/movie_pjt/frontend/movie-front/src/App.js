import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./router/Home";
import Main from "./router/Main";
import Detail from "./router/Detail";
import Nav from "./component/nav/Nav";
import Profile from "./router/Profile";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchPage from "./router/SearchPage";
import { useNavigate } from "react-router";

function App() {
  const [movies, setMovies] = useState([]);
  const API_URL = "http://127.0.0.1:8000";
  const getMovies = () => {
    axios({
      method: "GET",
      url: `${API_URL}/movies/`,
    })
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <BrowserRouter>
      <AppContent movies={movies} />
    </BrowserRouter>
  );
}

function AppContent({ movies }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !isHome) {
      // Token이 없고 Home 페이지가 아닌 경우 리디렉션 처리
      navigate("/");
    }
  }, [user, isHome, navigate]);
  return (
    <>
      {isHome ? null : <Nav movies={movies} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main movies={movies} />} />
        <Route path="/main/:id" element={<Detail />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/profile/:id" element={<Profile />}></Route>
        {/* element={<Profile userid={user.userId}/>} */}
      </Routes>
    </>
  );
}

export default App;
