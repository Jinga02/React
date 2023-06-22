import { useState } from "react";
function App() {
  const [first, setFirst] = useState(Math.floor(Math.random() * (10 - 1) + 1));
  const [second, setSecond] = useState(
    Math.floor(Math.random() * (10 - 1) + 1),
  );
  const [result, setResult] = useState("");
  const [alert, setAlert] = useState("");

  const onResult = (event) => {
    setResult(event.currentTarget.value);
  };
  const [cnt, setCnt] = useState(0);

  const gugudan = () => {
    if (result === "") {
      setAlert("정답을 입력해주세요");
      return;
    }
    if (first * second === Number(result)) {
      setAlert("딩동댕!");
      const randomNum1 = Math.floor(Math.random() * (10 - 1) + 1);
      const randomNum2 = Math.floor(Math.random() * (10 - 1) + 1);
      setFirst(randomNum1);
      setSecond(randomNum2);
      setCnt(0);
      setResult("");
    } else {
      setCnt(cnt + 1);
      setAlert(`땡! 오답횟수 : ${cnt + 1}`);
    }
  };
  console.log(result);
  return (
    <div>
      <div id="head">
        <h1>
          {first} 곱하기 {second}는?
        </h1>
      </div>
      <div id="main">
        <input
          type="number"
          value={result}
          onChange={onResult}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              gugudan();
            }
          }}
        />
        <button onClick={gugudan}>입력!</button>
      </div>
      <div id="bottom">
        <h1>{alert}</h1>
      </div>
    </div>
  );
}

export default App;
