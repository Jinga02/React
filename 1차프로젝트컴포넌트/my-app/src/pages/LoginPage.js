import React from "react";
import KakaoLogin from "../component/user/socialLogin/KakaoLogin";
import KakaoCallback from "../component/user/socialLogin/KaKaoCallback";

const LoginPage = () => {
  const divStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const spanStyle = {
    display: "block",
    marginBottom: "10px",
  };

  const inputStyle = {
    width: "200px",
  };

  const handleKakaoLogin = async (response) => {
    try {
      // 카카오 로그인 성공 후 처리할 로직을 작성합니다.
      // response.profile에 사용자 정보가 담겨 있습니다.
      console.log("카카오 로그인 성공:", response.profile);
    } catch (error) {
      console.error("카카오 로그인 실패:", error);
    }
  };

  return (
    <div style={divStyle}>
      <h1>CRIT</h1>
      <form action="">
        <span style={spanStyle}>
          <input type="text" placeholder="이메일" style={inputStyle} />
        </span>

        <span style={spanStyle}>
          <input type="text" placeholder="비밀번호" style={inputStyle} />
        </span>
      </form>
      <button>로그인</button>
      <div>
        <h3>혹시 가입된 아이디가 없으신가요?</h3>
        <a href="/SignUpPage">회원가입 하러가기</a>
      </div>
      <div>
        <KakaoLogin />
      </div>
    </div>
  );
};

export default LoginPage;
