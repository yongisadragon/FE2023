import { configureStore, createSlice } from "@reduxjs/toolkit";
import { user } from "./store/userSlice";

// let user = createSlice({
//   name: "user",
//   initialState: { name: "yong", age: 22 },
//   reducers: {
//     //state변경 함수에서 인자 state는 기존의 initialStae 자체가 들어옴. 즉, 어디선가 함수실행 요청이 들어오면(dispatch에 의해) yong(initialState) -> yongpal로 바꿔달란 함수임.
//     changeName(state) {
//       // return { name: "yongnono", age: 122 }; 기본적인 형태
//       state.name = "용아!! 밥먹어!!!!";
//     }
//   }
// });

let user2 = createSlice({
  name: "user2",
  initialState: { name: "yong2", age: 1 },
  reducers: {
    //state변경 함수에서 인자 state는 기존의 initialStae 자체가 들어옴. 즉, 어디선가 함수실행 요청이 들어오면(dispatch에 의해) yong(initialState) -> yongpal로 바꿔달란 함수임.
    changeAge(state, action) {
      // return { name: "yongnono", age: 122 }; 기본적으로 기존 스테이트 자체를 갈아치워주는 방식
      state.age += action.payload; //두번째 파라미터의 역할은 외부에서 받은 아규먼트가  action.payload자리로 유입됨. 버튼에 인자 10을 넣으면 10씩 오를거임.
    }
  }
});

let user3 = createSlice({
  name: "user3",
  initialState: [{ name: "count", count: 1 }],
  reducers: {
    //state변경 함수에서 인자 state는 기존의 initialStae 자체가 들어옴. 즉, 어디선가 함수실행 요청이 들어오면(dispatch에 의해) yong(initialState) -> yongpal로 바꿔달란 함수임.
    addCount(state, action) {
      state[action.payload].count++;
    },
    subCount(state, action) {
      state[action.payload].count--;
    }
  }
});

//export let { changeName } = user.actions; //추후 reducers함수가 여러개 생길 수 있으므로 디스트럭쳐링
export let { changeAge } = user2.actions;
export let { addCount, subCount } = user3.actions;

export default configureStore({
  //App.js에서 사용하기위해선 slice를 여기에 등록해야한다.
  reducer: {
    user: user.reducer,
    user2: user2.reducer,
    user3: user3.reducer
  }
});
