// swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// 나머지
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";

// 스타일
import {
  RootDiv,
  SwiperStyled,
  SwiperSlideStyled,
  Top,
  Mid,
  Bot,
} from "../../styles//pages//ChallengePageStyled";

const MyChallenge = () => {
  // 테스트용
  const [overView] = useState(
    "내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글"
  );

  const location = useLocation();
  const navigate = useNavigate();
  // 상세보기 클릭
  const detailClick = () => {
    if (location.pathname === "/ChallengePage") {
      navigate("/ChallengeCommunityPage");
    } else {
      openModal();
    }
  };
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
      {/* <h1 style={{ position: "absolute", top: "180px", left: "150px" }}>
        참여중인 챌린지 dㅣ리리이이
      </h1> */}
      <SwiperStyled
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlideStyled>
          <Top>
            <h1>나의 챌린지</h1>
            <h2>7/11(화) ~ 8/15(화)</h2>
            <h3>현재 3일째 참여 중</h3>
          </Top>
          <Mid>
            <img
              src="https://github.com/Jinga02/Review/assets/110621233/e8edd4c4-dd18-42d8-904c-4a04c6618018"
              alt="예싱이미지"
            />
            <p>
              {overView.split(" ").length > 32 ? (
                <>{overView.split(" ").slice(0, 32)} </>
              ) : (
                overView
              )}
            </p>
          </Mid>
          <Bot>
            <h2>15/15</h2>
            <button id="enter">입장하기</button>
            <button id="detail" onClick={detailClick}>
              {" "}
              {location.pathname === "/ChallengePage" ? "상세보기" : "참여내역"}
            </button>{" "}
          </Bot>
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <Top>
            <h1>나의 챌린지</h1>
            <h2>7/11(화) ~ 8/15(화)</h2>
            <h3>현재 3일째 참여 중</h3>
          </Top>
          <Mid>
            <img
              src="https://github.com/Jinga02/Review/assets/110621233/e8edd4c4-dd18-42d8-904c-4a04c6618018"
              alt="예싱이미지"
            />
            <p>
              {overView.split(" ").length > 32 ? (
                <>{overView.split(" ").slice(0, 32)} </>
              ) : (
                overView
              )}
            </p>
          </Mid>
          <Bot>
            <h2>15/15</h2>
            <button id="enter">입장하기</button>
            <button id="detail">
              {" "}
              {location.pathname === "/ChallengePage" ? "상세보기" : "참여내역"}
            </button>{" "}
          </Bot>
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <Top>
            <h1>나의 챌린지</h1>
            <h2>7/11(화) ~ 8/15(화)</h2>
            <h3>현재 3일째 참여 중</h3>
          </Top>
          <Mid>
            <img
              src="https://github.com/Jinga02/Review/assets/110621233/e8edd4c4-dd18-42d8-904c-4a04c6618018"
              alt="예싱이미지"
            />
            <p>
              {overView.split(" ").length > 32 ? (
                <>{overView.split(" ").slice(0, 32)} </>
              ) : (
                overView
              )}
            </p>
          </Mid>
          <Bot>
            <h2>15/15</h2>
            <button id="enter">입장하기</button>
            <button id="detail">
              {" "}
              {location.pathname === "/ChallengePage" ? "상세보기" : "참여내역"}
            </button>{" "}
          </Bot>
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <Top>
            <h1>나의 챌린지</h1>
            <h2>7/11(화) ~ 8/15(화)</h2>
            <h3>현재 3일째 참여 중</h3>
          </Top>
          <Mid>
            <img
              src="https://github.com/Jinga02/Review/assets/110621233/e8edd4c4-dd18-42d8-904c-4a04c6618018"
              alt="예싱이미지"
            />
            <p>
              {overView.split(" ").length > 32 ? (
                <>{overView.split(" ").slice(0, 32)} </>
              ) : (
                overView
              )}
            </p>
          </Mid>
          <Bot>
            <h2>15/15</h2>
            <button id="enter">입장하기</button>
            <button id="detail">
              {" "}
              {location.pathname === "/ChallengePage" ? "상세보기" : "참여내역"}
            </button>{" "}
          </Bot>
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <Top>
            <h1>나의 챌린지</h1>
            <h2>7/11(화) ~ 8/15(화)</h2>
            <h3>현재 3일째 참여 중</h3>
          </Top>
          <Mid>
            <img
              src="https://github.com/Jinga02/Review/assets/110621233/e8edd4c4-dd18-42d8-904c-4a04c6618018"
              alt="예싱이미지"
            />
            <p>
              {overView.split(" ").length > 32 ? (
                <>{overView.split(" ").slice(0, 32)} </>
              ) : (
                overView
              )}
            </p>
          </Mid>
          <Bot>
            <h2>15/15</h2>
            <button id="enter">입장하기</button>
            <button id="detail">
              {" "}
              {location.pathname === "/ChallengePage" ? "상세보기" : "참여내역"}
            </button>{" "}
          </Bot>
        </SwiperSlideStyled>
        <SwiperSlideStyled>
          <Top>
            <h1>나의 챌린지</h1>
            <h2>7/11(화) ~ 8/15(화)</h2>
            <h3>현재 3일째 참여 중</h3>
          </Top>
          <Mid>
            <img
              src="https://github.com/Jinga02/Review/assets/110621233/e8edd4c4-dd18-42d8-904c-4a04c6618018"
              alt="예싱이미지"
            />
            <p>
              {overView.split(" ").length > 32 ? (
                <>{overView.split(" ").slice(0, 32)} </>
              ) : (
                overView
              )}
            </p>
          </Mid>
          <Bot>
            <h2>15/15</h2>
            <button id="enter">입장하기</button>
            <button id="detail">
              {" "}
              {location.pathname === "/ChallengePage" ? "상세보기" : "참여내역"}
            </button>{" "}
          </Bot>
        </SwiperSlideStyled>
      </SwiperStyled>
      {/*  모달  */}
      <Modal
        style={customModalStyles}
        isOpen={isOpen}
        onRequestClose={closeModal}
      >
        <h1>참여내역</h1>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </>
  );
};

export default MyChallenge;
