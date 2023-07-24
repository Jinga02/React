import { useState } from "react";
import Modal from "react-modal";
import MyChallenge from "../component/challenge/MyChallenge";

const MainPage = () => {
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
      background: " rgba(22, 22, 22, 0.599)",
      width: "50%",
      height: "300px",
      border: "0.5px solid white",
      borderRadius: "8px",
      margin: "auto",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.5)",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // zIndex: "999",
    },
  };
  return (
    <>
      <button onClick={openModal}>바로입장</button>
      <Modal
        style={customModalStyles}
        isOpen={isOpen}
        onRequestClose={closeModal}
      >
        <MyChallenge />
      </Modal>
    </>
  );
};

export default MainPage;
