// 라이브러리
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// 컴포넌트
import NowMovie from "../component/movies/NowMovie";
import PopluarMovie from "../component/movies/PopluarMovie";
import Animation from "../component/movies/Animation";
import RecommendGenre from "../component/movies/RecommendGenre";
// 스타일
import "../CSS/router/main.css";
// swiper

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Main() {
  return (
    <div id="main">
      <div id="recommendGenre">
        <h1>사용자 맞춤 추천 영화</h1>
        <RecommendGenre />
      </div>
      <div id="nowMovie">
        <h1>현재 상영중 인 영화</h1>
        <NowMovie />
      </div>
      <div id="popluarMovie">
        <h1>인기 영화</h1>
        <PopluarMovie />
      </div>
      <div id="animation">
        <h1>애니메이션</h1>
        <Animation />
      </div>
    </div>
  );
}
