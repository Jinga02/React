import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUser: (state, action) => {
      const newUser = action.payload;
      // 중복되는 값이 없으면 배열에 추가
      if (!state.find((user) => user.id === newUser.id)) {
        return [...state, newUser]; // 새로운 배열을 반환하도록 수정
      }
      return state; // 중복되는 값이 있을 경우 현재 state를 그대로 반환
    },
    getUser: (state) => {
      return state; // 현재 state를 그대로 반환
    },
  },
});

export const { setUser } = userSlice.actions;
