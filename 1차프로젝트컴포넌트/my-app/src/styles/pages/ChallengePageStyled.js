import styled from "styled-components";

export const CreateChallenge = styled.div`
  width: 85%;
  display: flex;
  justify-content: flex-end;
  margin: 40px 0px 60px 0px;
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

export const SwiperStyled = styled.div`
  background-color: rgba(22, 22, 22, 0.599);
  width: 50%;
  height: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid white;
  border-radius: 8px;

  box-shadow: 5px 10px 20px #ff007a;
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
  #top {
    position: relative;
  }
  #top h1 {
    position: absolute;
  }
  #top h2 {
    position: absolute;
    left: 220px;
  }

  #top h3 {
    position: absolute;
    right: 30px;
  }

  #mid {
    position: relative;
    top: 80px;
  }
  #mid img {
    position: absolute;
  }
  #mid p {
    position: absolute;
    left: 220px;
    width: 70%;
  }
  #bot {
    position: relative;
    top: 220px;
  }
  #bot h2 {
    position: absolute;
    left: 40px;
  }
  #bot #enter {
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
  #bot #detail {
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

const ChallengePageStyled = {
  CreateChallenge,
  SwiperStyled,
};

export default ChallengePageStyled;
