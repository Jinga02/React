import React from "react";
const KakaoLogin = () => {
  const CLIENT_ID = process.env.REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/login/oauth2/code/kakao";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <img
      alt="카카오 로그인"
      src="https://github.com/Jinga02/React/assets/110621233/ae318c12-05f7-4318-947d-d60f181bf2c1"
      onClick={() => (window.location.href = kakaoURL)}
    />
  );
};

export default KakaoLogin;
