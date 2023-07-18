import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ToDo from "../component/ToDo";
import { add, printName } from "../store";

function Home() {
  const [text, setText] = useState("");

  // function mapStateToProps(state) {
  //   return { toDos: state };
  // }
  const toDos = useSelector((state) => state.toDosReducer);

  // function mapDispatchToProps(dispatch) {
  //   return {
  //     addToDo: (text) => dispatch(add(text)),
  //   };
  // }
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add(text));
    dispatch(printName());
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}
export default Home;

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
