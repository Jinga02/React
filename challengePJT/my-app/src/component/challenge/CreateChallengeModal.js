import {
  SCreateChallengeModalWrapper,
  SInfoChallenge,
  STextArea,
  STitleInput,
} from "../../styles/pages/SChallengePage";

import "react-calendar/dist/Calendar.css"; // css import
import ChallengeAuthentication from "./createChallenge/ChallengeAuthentication";
import ChallengeCalendar from "./createChallenge/ChallengeCalendar";
import ChallengeMember from "./createChallenge/ChallengeMember";
import ChallengeTime from "./createChallenge/ChallengeTime";
import SelectChallenge from "./createChallenge/SelectChallenge";

const CreateChallengeModal = () => {
  return (
    <SCreateChallengeModalWrapper>
      <STitleInput type="text" placeholder="제목을 입력하세요" />
      <SInfoChallenge>
        <STextArea placeholder="소개글을 작성하세요"></STextArea>
        <SelectChallenge />
        <ChallengeTime />
        <ChallengeAuthentication />
        <ChallengeMember />
        <ChallengeCalendar />
      </SInfoChallenge>
    </SCreateChallengeModalWrapper>
  );
};

export default CreateChallengeModal;
