import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "yong", age: 22 },
  reducers: {
    //state변경 함수에서 인자 state는 기존의 initialStae 자체가 들어옴. 즉, 어디선가 함수실행 요청이 들어오면(dispatch에 의해) yong(initialState) -> yongpal로 바꿔달란 함수임.
    changeName(state) {
      // return { name: "yongnono", age: 122 }; 기본적인 형태
      state.name = "용아!! 밥먹어!!!!";
    }
  }
});

export let { changeName } = user.actions;

export { user };
