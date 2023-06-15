import "./CSS/style.css";
import Home from "./router/Home";
// import NowMovie from "./component/NowMovie";
import DetailMovie from "./router/DetailMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie/:id" element={<DetailMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
