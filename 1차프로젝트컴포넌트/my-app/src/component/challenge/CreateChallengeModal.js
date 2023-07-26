import { useState } from "react";
import {
  SCreateChallengeModalWrapper,
  STitleInput,
  STextArea,
  SInfoChallenge,
  SSelectChallengeWrapper,
  SAuthenticationMethodWrapper,
  SMemberWrapper,
} from "../../styles/pages/SChallengePage";

const CreateChallengeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <SCreateChallengeModalWrapper>
      <STitleInput type="text" placeholder="제목을 입력하세요" />
      <SInfoChallenge>
        <STextArea placeholder="소개글을 작성하세요"></STextArea>
        <SSelectChallengeWrapper>
          <h3>챌린지 종류</h3>
          <li>
            <label>챌린지</label>
            <input type="radio" name="challengeType" />
          </li>
          <li>
            <label>챌린지</label>
            <input type="radio" name="challengeType" />
          </li>
        </SSelectChallengeWrapper>
        <SAuthenticationMethodWrapper>
          <h3>인증수단 설정</h3>
          <ul>
            <li>
              <label>실시간 인증</label>
              <input type="radio" />
            </li>
            <li>
              <label>실시간 인증</label>
              <input type="radio" />
            </li>
          </ul>
        </SAuthenticationMethodWrapper>
        <SMemberWrapper>
          <h3>인원수 설정</h3>
          <ul>
            <li>
              <label>실시간 인증</label>
              <input type="radio" />
            </li>
            <li>
              <label>실시간 인증</label>
              <input type="radio" />
            </li>
          </ul>
        </SMemberWrapper>
      </SInfoChallenge>

      <button onClick={closeModal}>나가기</button>
    </SCreateChallengeModalWrapper>
  );
};

export default CreateChallengeModal;
