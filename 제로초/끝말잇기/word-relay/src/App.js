import { useState } from "react";
function App() {
  const [question, setQuestion] = useState("사과");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [cnt, setCnt] = useState(3);

  const onHandleAnswer = (event) => {
    setAnswer(event.currentTarget.value);
  };

  const wordRelay = () => {
    if (answer[0] === question[question.length - 1]) {
      setResult("통과입니다.");
      setAnswer("");
      setQuestion(answer);
    } else {
      setResult("실패입니다.");
      setCnt(cnt - 1);
      if (cnt === 1) {
        alert("졌습니다.");
        setCnt(3);
        return;
      }
    }
  };
  return (
    <div>
      <div id="com">
        <h1>{question}</h1>
      </div>
      <div id="me">
        <input
          type="text"
          value={answer}
          // onKeyDown={(event) => {
          //   if (event.key === "Enter") {
          //     wordRelay();
          //   }
          // }}
          onChange={onHandleAnswer}
        />
        <button onClick={wordRelay}>입력</button>
      </div>
      <div id="bottom">
        <h1>
          {result} 남은 기회 : {cnt}
        </h1>
      </div>
    </div>
  );
}

export default App;
