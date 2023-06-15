import { useState } from "react";

export default function MinToHour() {
  // 시간을 담을 state
  const [amount, setAmount] = useState(0);
  // flipped 상태를 담을 state
  const [flipped, setFlipped] = useState(false);
  // 입력값 reset
  const reset = () => setAmount(0);
  // 입력값으로 change
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  // flipped 상태를 통해 disabled 변경
  const onflipped = () => {
    setFlipped((current) => !current);
    reset();
  };

  const [index, setIndex] = useState(-1);
  const onSelect = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="Minutes">Minutes : </label>
        <input
          id="Minutes"
          type="number"
          value={flipped ? amount * 60 : amount}
          disabled={flipped}
          onChange={onChange}
          placeholder="Minutes"
        />
      </div>
      <div>
        <label htmlFor="Hours">Hours : </label>
        <input
          id="Hours"
          type="number"
          value={flipped ? amount : Math.round(amount / 60)}
          onChange={onChange}
          disabled={!flipped}
          placeholder="Hours"
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onflipped}>Flip</button>
    </div>
  );
}
