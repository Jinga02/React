import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import CreateChallengeModal from "../../component/challenge/CreateChallengeModal";

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
  padding: 20px;
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
  width: 100%;
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

// Modal
export const CreateChallengeModalStyled = styled.div`
  position: absolute;
  h1 {
    color: white;
  }
  // 제목
  & > input:first-child {
    position: relative;

    color: white;
    width: 70%;
    height: 80px;
    background: rgba(0, 0, 0, 0);
    border: 0;
    border-bottom: 1px solid white;
    font-size: 35px;
  }
  & > input:first-child::placeholder {
    color: white;
  }
`;

export const TextArea = styled.textarea`
  position: relative;

  background-color: rgb(27, 27, 27);
  width: 50%;
  height: 200px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  color: white;
  &::placeholder {
    padding: 10px;
    color: rgb(150, 150, 150);
  }
`;

export const SelectChallenge = styled.div`
  position: relative;

  border: 0.5px solid white;
  border-radius: 6px;
  width: 30%;
  height: 400px;
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

export const AuthenticationMethod = styled.div`
  position: relative;
  border: 0.5px solid white;
  border-radius: 6px;
  width: 30%;
  height: 400px;
  color: white;
  font-size: 20px;
`;
