// swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// 나머지
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// 스타일
import { SwiperStyled } from "../../styles/component/MyChallengeStyled";
const MyChallenge = () => {
  // 테스트용
  const [overView] = useState(
    "내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글",
  );
  const location = useLocation();

  return (
    <>
      <h1>참여중인 챌린지</h1>
      <SwiperStyled>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div id="top">
              <h1>나의 챌린지</h1>
              <h2>7/11(화) ~ 8/15(화)</h2>
              <h3>현재 3일째 참여 중</h3>
            </div>
            <div id="mid">
              <img
                src="https://github.com/Jinga02/Review/assets/110621233/e8edd4c4-dd18-42d8-904c-4a04c6618018"
                alt="예싱이미지"
              />
              <p>
                {overView.split(" ").length > 32 ? (
                  <>
                    {overView.split(" ").slice(0, 32)}{" "}
                    <Link
                      style={{
                        cursor: "pointer",
                        color: "white",
                        textDecoration: "none",
                      }}
                      to="/your-path"
                    >
                      .....
                    </Link>
                  </>
                ) : (
                  overView
                )}
              </p>
            </div>
            <div id="bot">
              <h2>15/15</h2>
              <button id="enter">입장하기</button>
              <button id="detail">상세보기</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="top">
              <h1>나의 챌린지</h1>
              <h2>7/11(화) ~ 8/15(화)</h2>
              <h3>현재 3일째 참여 중</h3>
            </div>
            <div id="mid">
              <img
                src="https://github.com/Jinga02/Review/assets/110621233/e8edd4c4-dd18-42d8-904c-4a04c6618018"
                alt="예싱이미지"
              />
              <p>
                내가 참여중인 챌린지 소개글 내가 참여중인 챌린지 소개글내가
                참여중인 챌린지 소개글내가 참여중인 챌린지 소개글내가 참여중인
                챌린지 소개글내가 참여중인 챌린지 소개글
              </p>
            </div>
            <div id="bot">
              <h2>15/15</h2>
              <button id="enter">입장하기</button>
              <button id="detail">
                {" "}
                {location.pathname === "/ChallengePage"
                  ? "상세보기"
                  : "참여내역"}
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </SwiperStyled>
    </>
  );
};

export default MyChallenge;
