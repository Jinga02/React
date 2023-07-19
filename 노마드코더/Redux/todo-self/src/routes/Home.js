import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
// import { actionCreators } from "../store";
import { Link } from "react-router-dom";
import { add, remove } from "../store";
// Home 컴포넌트는 Redux store와 연결되어 상태를 읽고 액션을 디스패치할 수 있는 기능을 갖춘 컴포넌트입니다.
const Home = () => {
  const [text, setText] = useState("");

  const toDos = useSelector((state) => state.toDosReducer);
  console.log(toDos);
  const dispatch = useDispatch();

  // 입력 필드의 값이 변경될 때 호출되는 함수
  const onChange = (e) => {
    setText(e.target.value);
  };

  // 폼을 제출할 때 호출되는 함수
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add(text));
    // addToDo(text); // 입력한 할 일을 추가하는 액션을 디스패치합니다.
    setText(""); // 입력 필드 초기화
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ol>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <Link to={`/${toDo.id}`}>{toDo.text}</Link>
            <button onClick={() => dispatch(remove(toDo.id))}>Del</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;

// // mapStateToProps 함수는 Redux store의 상태를 컴포넌트의 props로 매핑하는 역할을 합니다.
// // state를 인자로 받아서 해당 컴포넌트에서 필요한 속성을 추출하여 객체로 반환합니다.
// const mapStateToProps = (state) => {
//   return { toDos: state.toDos };
// };

// // mapDispatchToProps 함수는 액션 디스패치 함수를 컴포넌트의 props로 매핑하는 역할을 합니다.
// // dispatch를 인자로 받아서 액션 디스패치 함수를 정의하고, 해당 함수를 props에 매핑합니다.
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToDo: (text) => dispatch(actionCreators.addToDo(text)), // addToDo 액션 디스패치 함수를 props에 매핑합니다.
//     deleteToDo: (id) => dispatch(actionCreators.deleteToDo(id)), // deleteToDo 액션 디스패치 함수를 props에 매핑합니다.
//     alertOne: () => dispatch(actionCreators.alertOne()),
//   };
// };

// // connect 함수는 mapStateToProps와 mapDispatchToProps를 활용하여 컴포넌트를 Redux store에 연결합니다.
// // mapStateToProps 함수의 반환값과 mapDispatchToProps 함수의 반환값을 해당 컴포넌트의 props로 전달합니다.
// // 이렇게 함으로써 컴포넌트는 Redux store의 상태를 읽고 액션을 디스패치할 수 있게 됩니다.
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
