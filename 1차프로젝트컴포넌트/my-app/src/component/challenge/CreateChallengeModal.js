import { useState } from "react";
import {
  SCreateChallengeModal,
  STextArea,
  SSelectChallengeWrapper,
  SAuthenticationMethodWrapper,
} from "../../styles/pages/SChallengePage";

const CreateChallengeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <SCreateChallengeModal>
      <input type="text" placeholder="제목을 입력하세요" />
      <STextArea placeholder="소개글을 작성하세요"></STextArea>
      <SSelectChallengeWrapper>
        <h3>챌린지 종류</h3>
        <li>
          <label>
            <input type="radio" name="challengeType" />
            챌린지
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="challengeType" />
            챌린지
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="challengeType" />
            챌린지
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="challengeType" />
            챌린지
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="challengeType" />
            챌린지
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="challengeType" />
            챌린지
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="challengeType" />
            챌린지
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="challengeType" />
            챌린지
          </label>
        </li>
      </SSelectChallengeWrapper>
      <SAuthenticationMethodWrapper></SAuthenticationMethodWrapper>
      <button onClick={closeModal}>나가기</button>
    </SCreateChallengeModal>
  );
};

export default CreateChallengeModal;
