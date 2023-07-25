import { styled } from "styled-components";

export const SEntranceButtonWrapper = styled.div`
  width: 100%;
  height: 100px;
`;
export const SEntranceButton = styled.button`
  position: relative;
  left: 75%;
  background-color: #0000c5;
  border: none;
  border-radius: 6px;
  margin: 25px;
  width: 150px;
  height: 50px;
  font-weight: bold;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;
export const SEntranceUl = styled.ul`
  position: relative;
  background-color: rgba(22, 22, 22, 0.599);
  width: 300px;
  left: 78%;
  padding: 0;
`;
export const SEntranceLi = styled.li`
  background-color: red;
  display: flex;
  width: 100%;
  height: 90px;
  list-style: none;
  h4 {
    position: relative;
    top: 45px;
    right: 65px;
  }
  img {
    margin: 5px;
    height: 70%;
  }
`;
export const SEntranceLiButton = styled.button`
  position: relative;
  top: 45px;
  left: 80px;
  width: 25%;
  height: 40%;
`;
// 챌스 검색
export const SSearchShortsWrapper = styled.div`
  text-align: center;
`;
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
