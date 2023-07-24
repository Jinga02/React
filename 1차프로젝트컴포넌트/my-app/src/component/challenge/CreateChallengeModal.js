import { useState } from "react";
import {
  CreateChallengeModalStyled,
  TextArea,
  SelectChallenge,
  AuthenticationMethod,
} from "../../styles/pages/ChallengePageStyled";

const CreateChallengeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <CreateChallengeModalStyled>
      <input type="text" placeholder="제목을 입력하세요" />
      <TextArea placeholder="소개글을 작성하세요"></TextArea>
      <SelectChallenge>
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
      </SelectChallenge>
      <AuthenticationMethod></AuthenticationMethod>
      <button onClick={closeModal}>나가기</button>
    </CreateChallengeModalStyled>
  );
};

export default CreateChallengeModal;
