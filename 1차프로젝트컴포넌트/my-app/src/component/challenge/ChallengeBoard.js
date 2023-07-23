import { Input, RootDiv } from "../../styles/component/ChallengeBoardStyled";
const ChallengeBoard = () => {
  return (
    <RootDiv>
      {/* <h1>챌린지 찾기</h1> */}
      <Input placeholder="검색어를 입력하세요." />
      <hr />
      <div></div>
    </RootDiv>
  );
};

export default ChallengeBoard;
