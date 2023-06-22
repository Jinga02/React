import "../../CSS/router/Detail.css";
import { useState } from "react";
import axios from "axios";
export default function CreateReview({ movie, updateReview }) {
  const [review, setReview] = useState("");
  const userId = JSON.parse(localStorage.getItem("user")).userId;
  const token = JSON.parse(localStorage.getItem("user")).token;
  const onChangeReview = (event) => {
    setReview(event.currentTarget.value);
  };
  const createReview = () => {
    axios({
      method: "POST",
      url: `http://127.0.0.1:8000/movies/${movie.id}/review/`,
      headers: {
        Authorization: `Token ${token}`,
      },
      data: {
        user: userId,
        content: review,
        rank: 5,
      },
    })
      .then((response) => {
        console.log(response);
        setReview("");
        updateReview();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div id="input">
        <h1>Review</h1>
        <input
          type="text"
          id="createReview"
          value={review}
          onChange={onChangeReview}
        />
      </div>
      <div id="button">
        <button onClick={createReview}>작성</button>
      </div>
    </>
  );
}
