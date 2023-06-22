import { useState } from "react";

export default function KmtoMiles() {
  const [length, setLength] = useState(0);

  const onChange = (event) => {
    setLength(event.target.value);
  };

  const [flip, setFlip] = useState(false);

  const changeFlip = () => {
    setFlip(!flip);
    setLength(0);
  };

  return (
    <div>
      <div>
        <label htmlFor="Km">Km : </label>
        <input
          type="number"
          id="Km"
          value={flip ? length * 1.609344 : length}
          disabled={flip}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="mile">Mile : </label>
        <input
          type="number"
          id="mile"
          value={flip ? length : (length / 1.609344).toFixed(4)}
          disabled={!flip}
          onChange={onChange}
        />
      </div>
      <button onClick={changeFlip}>Flip</button>
    </div>
  );
}
