import { useState } from "react";
import MinToHour from "./MinToHour";
import KmtoMiles from "./KmToMiles";

export default function Converter() {
  const [index, setIndex] = useState(-1);
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="-1">Select your unit</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "-1" ? <h1>Plese select your unit</h1> : null}
      {index === "0" ? <MinToHour /> : null}
      {index === "1" ? <KmtoMiles /> : null}
    </div>
  );
}
