import axios from "axios";
import { useEffect, useState } from "react";
import "../../CSS/router/Detail.css";

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
        rank: 5,
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
          <h2>작성자: {review.user.username}</h2>
          <h3>평점: {review.rank}</h3>
          {modifiedReviews[review.id] !== undefined ? (
            <div>
              <input
                type="text"
                value={modifiedReviews[review.id] || review.content}
                onChange={(e) =>
                  setModifiedReviews((prevState) => ({
                    ...prevState,
                    [review.id]: e.target.value,
                  }))
                }
              />
              <button onClick={() => modifyReview(review)}>수정</button>
            </div>
          ) : (
            <>
              <p>내용: {review.content}</p>
              {username === review.user.username && (
                <div>
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
                  <button onClick={() => deleteReview(review.id)}>삭제</button>
                </div>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
