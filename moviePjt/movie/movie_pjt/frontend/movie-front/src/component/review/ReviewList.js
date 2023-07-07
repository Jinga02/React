import axios from "axios";
import { useEffect, useState } from "react";
import "../../CSS/router/Detail.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ReviewList({ movie }) {
  // 공통
  const token = JSON.parse(localStorage.getItem("user")).token;
  const username = JSON.parse(localStorage.getItem("user")).username;
  const userId = JSON.parse(localStorage.getItem("user")).userId;

  // 리뷰 리스트
  const [reviews, setReviews] = useState([]);
  const getReview = () => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/movies/${movie.id}/review/`,
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((response) => {
      setReviews(response.data);
    });
  };
  // 별점
  const [star, setStar] = useState(0);
  const [hover, setHover] = useState(null);

  // 리뷰 삭제
  const deleteReview = (id) => {
    axios({
      method: "DELETE",
      url: `http://127.0.0.1:8000/movies/review/${id}`,
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then(() => {
        setReviews(reviews.filter((review) => review.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // 리뷰 수정
  const [modifiedReviews, setModifiedReviews] = useState({});
  const modifyReview = (review) => {
    axios({
      method: "PUT",
      url: `http://127.0.0.1:8000/movies/review/${review.id}/`,
      headers: {
        Authorization: `Token ${token}`,
      },
      data: {
        user: userId,
        content: modifiedReviews[review.id] || review.content,
        rank: star,
      },
    }).then(() => {
      setModifiedReviews((prevState) => ({
        ...prevState,
        [review.id]: undefined,
      }));
      getReview();
    });
  };

  useEffect(() => {
    if (movie.id) {
      getReview();
    }
  }, [movie]);

  return (
    <ul>
      {reviews.map((review) => (
        <li id="reivewLi" key={review.id}>
          <Link
            to={`/profile/${review.user.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>작성자: {review.user.username}</h3>
          </Link>

          {modifiedReviews[review.id] !== undefined ? (
            <div>
              <span>
                {[...Array(5)].map((star, index) => {
                  const ratingStar = index + 1;
                  return (
                    <label value="star" key={index}>
                      <input
                        type="radio"
                        style={{
                          display: "none",
                        }}
                        value={ratingStar}
                        onClick={() => setStar(ratingStar)}
                      />
                      <FaStar
                        size={24}
                        color={
                          ratingStar <= (hover !== null ? hover : star)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        // color={ratingStar <= (hover !== null ? hover : star) ? "#ffc107" : "#e4e5e9"}
                        onMouseEnter={() => setHover(ratingStar)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </span>
              <div>
                <textarea
                  style={{
                    width: "20%",
                    height: "50px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.139)",
                    border: "none",
                    color: "white",
                  }}
                  type="text"
                  value={modifiedReviews[review.id] || review.content}
                  onChange={(e) =>
                    setModifiedReviews((prevState) => ({
                      ...prevState,
                      [review.id]: e.target.value,
                    }))
                  }
                />
                <button onClick={() => modifyReview(review)}>수정 </button>
              </div>
            </div>
          ) : (
            <>
              <h3>
                평점:{" "}
                {[...Array(review.rank)].map((star, index) => {
                  return <FaStar size={24} color={"#ffc107"} />;
                })}
              </h3>
              <p style={{ whiteSpace: "pre-wrap" }}>
                내용:
                {username === review.user.username && (
                  <div>
                    <button onClick={() => deleteReview(review.id)}>
                      삭제
                    </button>
                    <button
                      onClick={() =>
                        setModifiedReviews((prevState) => ({
                          ...prevState,
                          [review.id]: review.content,
                        }))
                      }
                    >
                      수정
                    </button>
                  </div>
                )}
                <br /> {review.content}
              </p>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
