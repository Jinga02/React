import {
  SEntranceButton,
  SEntranceButtonWrapper,
  SEntranceUl,
  SEntranceLi,
  SEntranceLiButton,
} from "../styles/pages/SMainPage";
import SearchShorts from "../component/shorts/SearchShorts";
import { useState } from "react";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openChallenge = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <SEntranceButtonWrapper>
        <SEntranceButton onClick={openChallenge}>바로입장</SEntranceButton>
        {isOpen ? null : (
          <SEntranceUl>
            <SEntranceLi>
              <img
                src="https://github.com/Jinga02/Review/assets/110621233/e8edd4c4-dd18-42d8-904c-4a04c6618018"
                alt="예싱이미지"
              />
              <h4>챌린지 1</h4>
              <SEntranceLiButton>입장하기</SEntranceLiButton>
            </SEntranceLi>
            {/* <SEntranceLi>니 챌린지2</SEntranceLi>
            <SEntranceLi>니 챌린지3</SEntranceLi> */}
          </SEntranceUl>
        )}
      </SEntranceButtonWrapper>
      <SearchShorts />
    </>
  );
};

export default MainPage;
