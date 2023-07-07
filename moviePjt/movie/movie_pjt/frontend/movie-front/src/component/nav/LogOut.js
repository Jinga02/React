import { useNavigate } from "react-router-dom";

export default function LogOut() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    alert("로그아웃 되었습니다.");
    navigate("/");
    window.location.reload(); // 페이지 새로고침
  };
  return <p onClick={logout}>LogOut</p>;
}
