import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import StartPage from "./pages/start-page";
import IntroPage from "./pages/intro-page";
import Nav from "./component/nav/Nav";
import MainPage from "./pages/main-page";
import ChallengePage from "./pages/challenge-page";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";
import ChallengeCommunityPage from "./pages/challenge-community-page";
import ProfilePage from "./pages/profile-page";
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
