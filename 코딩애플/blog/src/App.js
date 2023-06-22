import "./App.css";
import React, { useState } from "react";

function App() {
  let [text, text_change] = useState([
    "남자 코트 추천",
    "남자 바지 추천",
    "남자 패딩 추천",
  ]);

  function changeText() {
    // 원본 state는 변경 X
    // state의 복사본을 만들어 수정
    var newText = [...text]; // deepcopy
    newText[0] = "여자 코트 추천";
    text_change(newText);
  }

  function sortText() {
    var sort_text = [...text];
    sort_text.sort();
    text_change(sort_text);
  }

  let [like, like_change] = useState(0);

  function addLike() {
    like_change(like + 1);
  }

  let [count, count_change] = useState(0);

  function plusOne() {
    count_change(count + 1);
  }

  function minusOne() {
    count_change(count - 1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <h1>{count}</h1>
      <button onClick={plusOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={changeText}>변경</button>
      <button onClick={sortText}>정렬</button>
      <div className="list">
        <h3>
          {text[0]} <span onClick={addLike}>👍 </span>
          {like}
        </h3>
        <p>2월 16일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{text[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{text[2]}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>

      <Modal></Modal>
    </div>
  );
}

// component 따로 파일 만들어도 됨
// 항상 대문자로 시작해야함
function Modal() {
  return (
    // div가 싫으면 <> </> 빈 상태로 만들어도됨
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

// function text() {
//   return <div></div>;
// }

export default App;
