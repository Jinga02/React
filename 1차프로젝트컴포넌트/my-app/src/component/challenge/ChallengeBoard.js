import {
  InputStyled,
  RootDiv,
} from "../../styles/component/ChallengeBoardStyled";

const ChallengeBoard = () => {
  return (
    <RootDiv>
      <h1>챌린지 찾기</h1>
      <InputStyled placeholder="검색어를 입력하세요." />
      <hr />
    </RootDiv>
  );
};

export default ChallengeBoard;
