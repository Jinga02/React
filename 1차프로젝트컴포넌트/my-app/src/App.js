import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import StartPage from "./pages/StartPage";
import IntroPage from "./pages/IntroPage";
import Nav from "./component/nav/Nav";
import MainPage from "./pages/MainPage";
import ChallengePage from "./pages/ChallengePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ChallengeCommunityPage from "./pages/ChallengeCommunityPage";
import ProfilePage from "./pages/ProfilePage";
import KakaoCallback from "./component/user/socialLogin/KaKaoCallback";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();

  // StartPage Nav를 숨김
  const showNav = location.pathname !== "/";
  return (
    <>
      {showNav && <Nav />}
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login/oauth2/code/kakao" element={<KakaoCallback />} />
        <Route path="/IntroPage" element={<IntroPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/ChallengePage" element={<ChallengePage />} />
        <Route
          path="/ChallengeCommunityPage"
          element={<ChallengeCommunityPage />}
        />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
