import React, { useState } from "react";
import Modal from "react-modal";

const ChallengePage = () => {
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
      <h1>ChallengePage입니다.</h1>
      <button onClick={openModal}>Challenge만들기</button>
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
