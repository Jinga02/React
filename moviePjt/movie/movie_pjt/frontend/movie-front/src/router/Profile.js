import { useLocation } from "react-router-dom";
import "../CSS/profile/profile.css";
import LikeMovies from "../component/profile/LikeMovie";
import LikeUser from "../component/profile/LikeUser";
import UserInf from "../component/profile/UserInf";
import { useEffect, useState } from "react";
import GuestBook from "../component/profile/GuestBook";

const Profile = () => {
  const location = useLocation();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false); // 첫 로드 후 초기 로드 상태를 false로 설정
    } else {
      // URL이 변경될 때마다 페이지를 새로고침 (첫 로드 제외)
      window.location.reload();
    }
  }, [location.pathname]);
  // 정상적으로 URL은 변경되지만 페이지 콘텐츠가 갱신되지 않는다면, 이는 React Router가 동일한 컴포넌트를 재사용하기 때문일 가능성이 큽니다. 이 때는 URL의 변화를 감지하여 컴포넌트를 업데이트해야 합니다.
  // 컴포넌트 안에서 useEffect 훅을 사용하여 URL의 변화를 감지하고, 필요한 데이터를 불러오거나 상태를 업데이트하는 로직을 추가해보세요.
  // 예를 들어, 만약 프로필 페이지에서 URL의 userId 파라미터가 변경될 때마다 새로운 사용자 데이터를 불러오려면 다음과 같이 사용할 수 있습니다:

  // 리뷰리스트 리렌더링용
  // const [update, setUpdate] = useState(0);
  // const updateReview = () => {
  //   setUpdate((updateReview) => updateReview + 1);
  // };
  return (
    <div
      id="first"
      style={{
        color: "white",
      }}
    >
      <div id="">
        <h1>유저 소개</h1>
        <LikeUser />
        <UserInf />
      </div>
      <div id="">
        <h1>유저가 좋아하는 영화</h1>
        <LikeMovies />
      </div>
      <div id="">
        <h1>방명록</h1>
        <GuestBook />
      </div>
    </div>
  );
};

export default Profile;
