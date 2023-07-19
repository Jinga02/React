import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  // useParams를 사용하여 URL의 id 파라미터를 가져옵니다.
  const myId = useParams().id;
  const toDos = useSelector((state) => state.toDosReducer);

  // toDos 배열에서 해당 id와 일치하는 항목을 찾습니다.
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));

  return (
    <div>
      <h1>Detail</h1>
      <h2>Text: {toDo.text}</h2>
      <h2>ID: {toDo.id}</h2>
    </div>
  );
};

export default Detail;

// mapStateToProps 함수는 Redux store의 상태를 컴포넌트의 props로 매핑하는 역할을 합니다.
// state를 인자로 받아서 해당 컴포넌트에서 필요한 속성을 추출하여 객체로 반환합니다.
// const mapStateToProps = (state) => {
//   return {
//     toDos: state.toDos,
//   };
// };

// connect 함수를 사용하여 Detail 컴포넌트를 Redux store에 연결합니다.
// mapStateToProps 함수의 반환값을 해당 컴포넌트의 props로 전달합니다.
// export default connect(mapStateToProps)(Detail);
