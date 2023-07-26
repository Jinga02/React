import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// ChallengPage
export const SCreateChallengeWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: flex-end;
  margin: 30px 0px -40px 0px;
`;
export const SCreateChallengeButton = styled.button`
  background-color: #ff007a;
  border: none;
  border-radius: 6px;
  width: 150px;
  height: 50px;
  font-weight: bold;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;

// MyChallenge

export const SSwiper = styled(Swiper)`
  background-color: rgba(22, 22, 22, 0.599);
  width: 50%;
  height: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 0.5px solid white;
  border-radius: 8px;
  box-shadow: 5px 5px 20px #ff007a;

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;

export const SSwiperSlide = styled(SwiperSlide)`
  h1 {
    position: absolute;
    top: -10px;
  }
`;

export const STopWrapper = styled.div`
  h2 {
    position: absolute;
    left: 220px;
  }

  h3 {
    position: absolute;
    right: 30px;
  }
`;

export const SMidWrapper = styled.div`
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

export const SBotWrapper = styled.div`
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
//  ChallengeBoard
export const SChallengeBoardWrapper = styled.div``;
export const SInput = styled.input`
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

// CreateChallengeModal
export const SCreateChallengeModalWrapper = styled.div`
  color: white;
  margin: 10px 10%;
`;
export const STitleInput = styled.input`
  color: white;
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0);
  border: 0;
  border-bottom: 1px solid white;
  font-size: 35px;
  &::placeholder {
    color: white;
  }
`;
export const SInfoChallenge = styled.div``;

export const STextArea = styled.textarea`
  background-color: rgb(27, 27, 27);
  width: 530px;
  height: 150px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  color: white;
  margin: 20px 0;

  &::placeholder {
    padding: 15px 10px;
    color: rgb(150, 150, 150);
  }
`;

export const SSelectChallengeWrapper = styled.div`
  width: 250px;
  height: 260px;
  background-color: rgb(27, 27, 27);
  border: 0.5px solid white;
  border-radius: 6px;
  color: white;
  font-size: 20px;

  li {
    list-style: none;
  }
  input {
    width: 25px;
    height: 25px;
  }
`;

export const SAuthenticationMethodWrapper = styled.div`
  position: relative;
  bottom: 261px;
  left: 280px;
  width: 250px;
  border: 0.5px solid white;
  border-radius: 6px;
  color: white;
  font-size: 20px;
`;
export const SMemberWrapper = styled.div`
  position: relative;
  bottom: 261px;
  left: 280px;
  width: 250px;
  border: 0.5px solid white;
  border-radius: 6px;
  color: white;
  font-size: 20px;
`;
