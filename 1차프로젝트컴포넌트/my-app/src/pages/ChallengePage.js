import React, { useState } from "react";
import Modal from "react-modal";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
      <h1>챌린지게시판</h1>
      <hr />
      <div id="createChallenge">
        <button onClick={openModal}>Challenge만들기</button>
      </div>
      <div id="myChallenge">
        <Swiper
          style={{
            backgroundColor: "gray",
            width: "60%",
            height: "300px",
            margin: "auto",
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <h1>나의 챌린지</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>나의 챌린지</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>나의 챌린지</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>나의 챌린지</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>나의 챌린지</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>나의 챌린지</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>나의 챌린지</h1>
          </SwiperSlide>
        </Swiper>
      </div>
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
