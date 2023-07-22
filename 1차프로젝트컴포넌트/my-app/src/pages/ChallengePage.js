// style
import { CreateChallenge } from "./../styles/pages/ChallengePageStyled";

// 나머지
import React, { useState } from "react";
import Modal from "react-modal";
import MyChallenge from "../component/challenge/MyChallenge";
import ChallengeBoard from "../component/challenge/ChallengeBoard";
const ChallengePage = () => {
  // 챌린지 만들기 모달
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const customModalStyles = {
    content: {
      background: "white",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      margin: "auto",
      maxWidth: "400px",
      height: "600px",
      padding: "20px",
      color: "black",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "999",
    },
  };

  return (
    <>
      <h1>챌린지</h1>
      <hr />
      <CreateChallenge>
        <button onClick={openModal}>챌린지 만들기</button>
      </CreateChallenge>
      <MyChallenge />
      <ChallengeBoard />
      {/*  모달  */}
      <Modal
        style={customModalStyles}
        isOpen={isOpen}
        onRequestClose={closeModal}
      >
        <h1>Challenge만들기</h1>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </>
  );
};

export default ChallengePage;
