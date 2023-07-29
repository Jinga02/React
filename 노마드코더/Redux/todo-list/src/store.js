// redux-toolkit
import { configureStore, createSlice } from "@reduxjs/toolkit";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// redux
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const ADD = "ADD";
// const DELETE = "DELTETE";

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

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE:
//       return state.filter((toDo) => toDo.id !== action.id);
//     default:
//       return state;
//   }
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// redux-toolkit
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 액션 생성자 함수
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });
import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDos", // Slice의 이름을 정의하는 부분
  initialState: [], // 초기 상태를 정의하는 부분
  reducers: {
    add: (state, action) => {
      // 'add' 액션을 처리하는 리듀서 함수
      // state: 현재의 상태
      // action: 액션 객체
      state.push({ text: action.payload, id: Date.now() });
      // 새로운 할일 항목을 state에 추가
    },
    remove: (state, action) =>
      // 'remove' 액션을 처리하는 리듀서 함수
      // state: 현재의 상태
      // action: 액션 객체
      state.filter((toDo) => toDo.id !== action.payload),
    // 지정된 id를 가진 할일 항목을 state에서 제거
  },
});

const store = configureStore({
  reducer: {
    toDosReducer: toDos.reducer,
  },
});

export const { add, remove } = toDos.actions;
export default store;
