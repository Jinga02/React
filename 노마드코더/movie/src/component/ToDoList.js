import { useState } from "react";

export default function ToDoList() {
  // 입력해서 toDos에 추가할 값
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  // input입력값 변경 확인
  const onChange = (event) => {
    // console.log(event.target.value);
    setToDo(event.target.value);
  };
  // toDos에 toDo추가
  const addToDo = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((previousToDos) => [...previousToDos, toDo]);
    setToDo("");
  };
  // todo 삭제
  const delToDo = (index) => {
    setToDos((previousToDos) => previousToDos.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h1>My ToDo List ({toDos.length})</h1>
      <hr />
      <form>
        <input type="text" value={toDo} onChange={onChange} />
        <button onClick={addToDo}>Add</button>
      </form>
      <ol>
        {toDos.map((todo, index) => (
          <div
            style={{
              display: "flex",
            }}
            key={index}
          >
            <li>{todo}</li>
            <button onClick={() => delToDo(index)}>x</button>
          </div>
        ))}
      </ol>
    </div>
  );
}
