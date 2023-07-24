import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const CreateChallenge = styled.div`
  width: 85%;
  display: flex;
  justify-content: flex-end;
  margin: 30px 0px -40px 0px;
  button {
    background-color: #ff007a;
    border: none;
    border-radius: 6px;
    width: 150px;
    height: 50px;
    font-weight: bold;
    font-size: 18px;
    color: white;
    cursor: pointer;
  }
`;

// MyChallenge
export const SwiperStyled = styled(Swiper)`
  background-color: rgba(22, 22, 22, 0.599);
  width: 50%;
  height: 300px;
  margin: 100px auto;
  border: 0.5px solid white;
  border-radius: 8px;
  box-shadow: 5px 5px 20px #ff007a;

  // .swiper-button-prev,
  // .swiper-button-next {
  // }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  padding: 10px;

  h1 {
    position: absolute;
    top: -10px;
  }
`;

export const Top = styled.div`
  position: relative;

  h2 {
    position: absolute;
    left: 220px;
  }

  h3 {
    position: absolute;
    right: 30px;
  }
`;

export const Mid = styled.div`
  position: relative;
  top: 80px;

  img {
    position: absolute;
  }
  p {
    position: absolute;
    left: 220px;
    width: 70%;
  }
`;

export const Bot = styled.div`
  position: relative;
  top: 220px;

  h2 {
    position: absolute;
    left: 40px;
  }
  #enter {
    position: absolute;
    right: 200px;
    background-color: #0000c5;
    border: none;
    border-radius: 6px;
    width: 150px;
    height: 50px;
    font-weight: bold;
    font-size: 18px;
    color: white;
    cursor: pointer;
  }
  #detail {
    position: absolute;
    right: 30px;
    background-color: #33ff00;
    border: none;
    border-radius: 6px;
    width: 150px;
    height: 50px;
    font-weight: bold;
    font-size: 18px;
    color: black;
    cursor: pointer;
  }
`;

// ChallengeBoard
export const Input = styled.input`
  background-color: rgba(22, 22, 22, 0.599);
  color: white;
  width: 50%;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  padding: 13px;
  margin: 0 auto;
  display: block;

  & + hr {
    width: 50%;
    border: none;
    height: 0.5px;
    background-color: #ccc;
    margin: 30px auto;
  }
`;
