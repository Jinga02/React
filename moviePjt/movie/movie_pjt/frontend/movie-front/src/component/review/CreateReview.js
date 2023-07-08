import "../../CSS/router/Detail.css";
import axios from "axios";
import useInput from "../../hooks/useInput";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
export default function CreateReview({ movie, updateReview }) {
  const userId = JSON.parse(localStorage.getItem("user")).userId;
  const token = JSON.parse(localStorage.getItem("user")).token;

  // 별점
  const [star, setStar] = useState(0);
  const [hover, setHover] = useState(null);
  // 리뷰
  const [review, onChangeReview, setReview] = useInput("");
  const createReview = () => {
    // children으로 가져온 데이터는 추출해서 따로 사용이 안되고,
    // ReviewList 컴포넌트 만들지 말고 Detail에서 바로 만들어서 상태관리하고 데이터를 CreateReview에 넘기면 되지만 귀찮...
    // 먼저 현재 영화의 리뷰 목록을 가져온다.
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/movies/${movie.id}/review/`,
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((response) => {
      const reviews = response.data;

      // 현재 유저가 이미 리뷰를 작성했는지 확인한다.
      const hasWrittenReview = reviews.some(
        (review) => review.user.id === userId,
      );

      if (hasWrittenReview) {
        // 이미 리뷰를 작성한 경우
        alert("이미 리뷰를 작성한 경우 수정만 가능합니다.");
      } else {
        // 리뷰를 작성한다.
        axios({
          method: "POST",
          url: `http://127.0.0.1:8000/movies/${movie.id}/review/`,
          headers: {
            Authorization: `Token ${token}`,
          },
          data: {
            user: userId,
            content: review,
            rank: star,
          },
        })
          .then(() => {
            updateReview();
            setReview("");
            setStar(0);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <>
      <div id="input">
        <h1>Review</h1>
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
                  onClick={() => {
                    setStar(ratingStar);
                  }}
                />
                <FaStar
                  size={24}
                  color={
                    ratingStar <= (hover !== null ? hover : star)
                      ? "#ffc107"
                      : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(ratingStar)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </span>
        <textarea
          style={{
            width: "95%",
            height: "100px",
          }}
          type="text"
          id="createReview"
          value={review}
          onChange={onChangeReview}
        />

        <div id="button">
          <button onClick={createReview}>작성</button>
        </div>
      </div>
    </>
  );
}
// const [rating, setRating] = useState(0); // 별점 상태
// const [hover, setHover] = useState(null); // 마우스 오버 상태
{
  /* {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  style={{ display: "none" }}
                />
                <FaStar
                  size={24}
                  color={
                    ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })} */
}
