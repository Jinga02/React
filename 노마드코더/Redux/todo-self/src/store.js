import { configureStore, createSlice } from "@reduxjs/toolkit";

// // 액션 타입 정의
// const ADD = "ADD";
// const DELETE = "DELETE";

// // 액션 생성자 함수
// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// // 리듀서 함수
// const toDoReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       // 새로운 할 일을 추가할 때는 기존의 상태 배열에 새로운 할 일 객체를 추가하여 반환합니다.
//       return [...state, { text: action.text, id: Date.now() }];
//     case DELETE:
//       // 특정 id를 가진 할 일을 삭제할 때는 해당 id와 일치하지 않는 할 일만을 필터링하여 반환합니다.
//       return state.filter((toDo) => toDo.id !== action.id);
//     default:
//       // 기본 상태는 현재 상태를 그대로 반환합니다.
//       return state;
//   }
// };

// const alertOne = () => {
//   return {
//     type: "one",
//   };
// };
// // const userReducer = (state = [1, 2, 3], action) => {
// //   switch (action.type) {
// //     case "one":
// //       alert(state[0]);
// //       return state;
// //     case "two":
// //       alert(state[1]);
// //       return state;
// //     case "three":
// //       alert(state[2]);
// //       return state;
// //     default:
// //       return state;
// //   }
// // };

// // 여러 개의 리듀서를 combineReducers 함수로 결합합니다.
// const rootReducer = combineReducers({
//   toDos: toDoReducer,
//   // user: userReducer,
// });

// // 스토어 생성
// const store = createStore(rootReducer);

// // 액션 생성자 함수를 하나의 객체로 묶어서 export합니다.
// export const actionCreators = {
//   addToDo,
//   deleteToDo,
//   alertOne,
// };

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

const store = configureStore({
  reducer: {
    toDosReducer: toDos.reducer,
  },
});

export const { add, remove } = toDos.actions;

export default store;
