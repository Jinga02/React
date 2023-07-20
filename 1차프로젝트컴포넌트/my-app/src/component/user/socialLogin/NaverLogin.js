import React from "react";
const NaverLogin = () => {
  const naverUrl = "http://localhost:8080/oauth2/authorization/naver";
  return (
    <img
      alt="네이버 로그인"
      src="https://github.com/Jinga02/React/assets/110621233/656c14d8-04de-48c9-aeac-acc7d80542b1"
      style={{
        width: "183px",
        height: "45px",
      }}
      onClick={() => (window.location.href = naverUrl)}
    />
  );
};

export default NaverLogin;
