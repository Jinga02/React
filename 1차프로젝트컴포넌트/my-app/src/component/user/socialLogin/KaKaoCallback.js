import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// function KakaoCallback() {
//   const code = new URL(window.location.href).searchParams.get("code");

//   useEffect(() => {
//     localStorage.clear();
//     localStorage.setItem("token", code);
//     window.location.replace("/IntroPage");
//   }, []);

//   return <></>;
// }

// export default KakaoCallback;

const KakaoCallback = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const registrationId = "kakao";
  const state = "200";
  const kakaoLogin = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8080/login/oauth2/code/${registrationId}?code=${code}&state=${state}`,
    })
      .then((res) => {
        //백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
        console.log(res);
        //계속 쓸 정보들( ex: 이름) 등은 localStorage에 저장해두자
        // localStorage.setItem("token", res.data.token);
        //로그인이 성공하면 이동할 페이지
        navigate("/IntroPage");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //인가코드 백으로 보내는 코드
  useEffect(() => {
    kakaoLogin();
  }, []);

  return (
    <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default KakaoCallback;
