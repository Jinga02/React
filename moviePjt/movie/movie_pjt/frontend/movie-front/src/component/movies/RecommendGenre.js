import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// swiper
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../CSS/movie/Movies.css";

const RecommendGenre = () => {
  const [recommendGenre, setRecommendGenre] = useState([]);
  const API_URL = "http://127.0.0.1:8000";

  // 카드 뒤집기
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const handleMouseEnter = (movieId) => {
    setHoveredMovie(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };
  const token = JSON.parse(localStorage.getItem("user")).token;
  const getRecommendGenre = () => {
    axios({
      method: "GET",
      url: `${API_URL}/movies/recommend_genre/`,
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((response) => {
      setRecommendGenre(response.data.movies);
    });
  };

  useEffect(() => {
    getRecommendGenre();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <ul>
        {recommendGenre.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <li
                id="swiper"
                onMouseEnter={() => handleMouseEnter(movie.id)}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredMovie === movie.id ? (
                  <div id="inf">
                    <h2>{movie.title}</h2>
                    <h3>개봉일 {movie.release_date}</h3>
                    <h3>
                      평점 : {movie.vote_average} 투표수 : {movie.vote_count}표
                    </h3>
                    <p>
                      {movie.overview
                        ? movie.overview.split(" ").length > 50
                          ? movie.overview.split(" ").slice(0, 50) + "..."
                          : movie.overview
                        : "줄거리가 없습니다..."}
                    </p>
                    <Link to={`./${movie.id}`} state={{ movieData: movie }}>
                      <button>상세보기</button>
                    </Link>
                  </div>
                ) : (
                  <div id="poster">
                    <img
                      id="posterImg"
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt="영화 포스터"
                    />
                  </div>
                )}
              </li>
            </SwiperSlide>
          );
        })}
      </ul>
    </Swiper>
  );
};

export default RecommendGenre;
