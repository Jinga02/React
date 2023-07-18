import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Thumbnail from "./pages/ThumbnailPage";
import OurPage from "./pages/OurPage";
import Nav from "./component/nav/Nav";
import MainPage from "./pages/MainPage";
import ChallengePage from "./pages/ChallengePage";
import DetailChallengePage from "./pages/DetaliChallengePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();

  // ThumbnailPage에서는 Nav를 숨김
  const showNav = location.pathname !== "/";

  return (
    <>
      {showNav && <Nav />}
      <Routes>
        <Route path="/" element={<Thumbnail />} />
        <Route path="/OurPage" element={<OurPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/ChallengePage" element={<ChallengePage />} />
        <Route path="/DetailChallengePage" element={<DetailChallengePage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
