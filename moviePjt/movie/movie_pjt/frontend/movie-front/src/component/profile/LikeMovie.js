import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const LikeMovie = () => {
  const API_URL = "http://127.0.0.1:8000";
  // 로그인 유저
  const user = JSON.parse(localStorage.getItem("user"));
  // 프로필 유저 id
  const { id } = useParams();
  // 프로필 유저 정보
  const [profileUser, setProfileUser] = useState({});
  const getUserProfile = () => {
    axios({
      method: "GET",
      url: `${API_URL}/accounts/profile/${id}/`,
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then((res) => {
        setProfileUser(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [likeMovie, setLikeMovie] = useState([]);

  // 카드 뒤집기
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const handleMouseEnter = (movieId) => {
    setHoveredMovie(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };
  const getLikeMovie = useCallback(() => {
    axios({
      method: "get",
      url: `http://127.0.0.1:8000/movies/${id}/liked_movies/`,
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then((res) => {
        setLikeMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.token, user.userId]);
  useEffect(() => {
    getLikeMovie();
  }, [getLikeMovie]);
  return (
    <span>
      {likeMovie && likeMovie.length === 0 ? (
        <p>아직 좋아하는 영화가 없습니다.</p>
      ) : (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <ul>
            {likeMovie &&
              likeMovie.map((movie) => {
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
                            평점 : {movie.vote_average} 투표수 :{" "}
                            {movie.vote_count}표
                          </h3>
                          <p>
                            {movie.overview
                              ? movie.overview.split(" ").length > 50
                                ? movie.overview.split(" ").slice(0, 50) + "..."
                                : movie.overview
                              : "줄거리가 없습니다..."}
                          </p>
                          <Link
                            to={`../main/ ${movie.id}`}
                            state={{ movieData: movie }}
                          >
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
      )}
    </span>
  );
};

export default LikeMovie;
