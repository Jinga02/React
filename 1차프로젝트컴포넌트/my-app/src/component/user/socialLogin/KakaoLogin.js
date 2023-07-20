import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoLogin = () => {
  // const CLIENT_ID = process.env.REST_API_KEY;
  // console.log(process.env);
  const CLIENT_ID = "99f2cfe427d14f3e95d12150008fc89a";
  const REDIRECT_URI = "http://localhost:3000/login/oauth2/code/kakao";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  // const kakaoURL = "http://localhost:8080/oauth2/authorization/kakao";
  // const navigate = useNavigate();
  // const kakaoURL = () => {
  //   axios({
  //     method: "GET",
  //     url: "https://kauth.kakao.com/oauth/authorize",
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       navigate("/IntroPage");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  //   fetch(apiUrl, {
  //     method: "POST",
  //     body: data
  // })
  //     .then( (res) => {
  //         if (res.status === 200) {
  //             console.log(res.headers.get("token"));

  return (
    <img
      alt="카카오 로그인"
      src="https://github.com/Jinga02/React/assets/110621233/ae318c12-05f7-4318-947d-d60f181bf2c1"
      onClick={() => (window.location.href = kakaoURL)}
      // onClick={() => {
      //   fetch(kakaoURL)
      //     .then((response) => response.json())
      //     .then((data) => console.log(data))
      //     .catch((error) => console.error(error));
      // }}
    />
  );
};

export default KakaoLogin;
