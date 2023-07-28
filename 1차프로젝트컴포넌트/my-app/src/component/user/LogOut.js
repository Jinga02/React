import axios from "axios";
import { persistor } from "../../store"; // 경로가 맞는지 확인하세요
import { useNavigate } from "react-router-dom";
const LogOut = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const nav = useNavigate();

  const logOut = () => {
    axios
      .post("http://localhost:8080/api/auth/logout", {
        accessToken,
        refreshToken,
      })
      .then((res) => {
        console.log(res);
        persistor.flush(); // 영구 저장된 상태 초기화
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <h3 onClick={logOut}>로그아웃</h3>;
};

export default LogOut;
