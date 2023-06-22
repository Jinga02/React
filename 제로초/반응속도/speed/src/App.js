import "./app.css";
import { useState, useRef } from "react";

function App() {
  const [gameState, setGameState] = useState({
    state: "waiting",
    message: "클릭해서 시작하세요",
    result: [],
  });

  const [timeoutId, setTimeoutId] = useState(null);

  const startTime = useRef();
  const endTime = useRef();

  const timeout = () => {
    const id = setTimeout(() => {
      setGameState((prevState) => ({
        ...prevState,
        state: "now",
        message: "지금 클릭하세요!",
      }));
      startTime.current = new Date();
    }, Math.floor(Math.random() * 1000 + 3000));
    setTimeoutId(id);
  };

  const onClickScreen = () => {
    if (gameState.result.length >= 5) {
      clearTimeout(timeoutId);
      setGameState((prevState) => ({
        ...prevState,
        state: "waiting",
        message: "클릭해서 시작하세요.",
        result: [...prevState.result],
      }));
      alert("5회 측정 완료");
    } else if (gameState.state === "waiting") {
      setGameState({
        state: "ready",
        message: "초록색이 되면 클릭하세요.",
        result: [...gameState.result],
      });
      timeout();
    } else if (gameState.state === "ready") {
      clearTimeout(timeoutId);
      setGameState({
        state: "waiting",
        message: "너무 성급하시군요! 초록색이 된 후에 클릭하세요",
        result: [...gameState.result],
      });
    } else if (gameState.state === "now") {
      endTime.current = new Date();
      setGameState((prevState) => ({
        ...prevState,
        state: "waiting",
        message: "클릭해서 시작하세요.",
        result: [...prevState.result, endTime.current - startTime.current],
      }));
    }
  };
  console.log(gameState.result);
  return (
    <div id="all">
      <h1>{gameState.message}</h1>
      <div
        id="screen"
        className={gameState.state}
        onClick={onClickScreen}
      ></div>
      <div>
        {gameState.result.length === 0 ? null : (
          <h1>
            반응시간 :{" "}
            {gameState.result.reduce((a, c) => a + c) / gameState.result.length}
            ms
          </h1>
        )}
      </div>
    </div>
  );
}

export default App;
