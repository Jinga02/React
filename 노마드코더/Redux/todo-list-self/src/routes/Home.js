import React, { useState } from "react";
const Home = () => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <h1>ToDo List</h1>
      <form>
        <input value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
    </>
  );
};

export default Home;
