import React from "react";

const KakaoLogin = () => {
  const REDIRECT_URI = "http://localhost:3000/login/oauth2/code/kakao";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <img
      alt="카카오 로그인"
      src="image/kakaoLogin.png"
      width="255"
      height="35"
      style={{ margin: "0px 24px 16px 24px" }}
      onClick={() => (window.location.href = kakaoURL)}
    />
  );
};

export default KakaoLogin;
