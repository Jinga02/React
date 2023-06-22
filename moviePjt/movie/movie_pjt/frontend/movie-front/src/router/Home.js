import "../CSS/router/Home.css";
import "../CSS/sign/SignUp.css";
import "../CSS/sign/Login.css";
import { useState } from "react";
import Modal from "react-modal";
import SignUpModal from "../component/sign/SignUpModal";
import LoginModal from "../component/sign/LoginModal";

export default function Home() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openSignUpModal = () => {
    setIsSignUpOpen(true);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  Modal.setAppElement("#root"); // App 컴포넌트가 마운트된 DOM 요소의 id를 지정

  return (
    <div id="Home">
      <h1>Home</h1>
      <div id="explanation"></div>

      <div>
        <button onClick={openLoginModal}>시작하기</button>
        <button onClick={openSignUpModal}>회원가입</button>
      </div>
      {/* 회원가입 모달 */}
      <Modal id="Modal" isOpen={isSignUpOpen} onRequestClose={closeSignUpModal}>
        <SignUpModal />
        <button id="closeModal" onClick={closeSignUpModal}>
          X
        </button>
      </Modal>
      {/* 로그인 모달 */}
      <Modal id="Modal" isOpen={isLoginOpen} onRequestClose={closeLoginModal}>
        <LoginModal />
        <button id="closeModal" onClick={closeLoginModal}>
          X
        </button>
      </Modal>
    </div>
  );
}
