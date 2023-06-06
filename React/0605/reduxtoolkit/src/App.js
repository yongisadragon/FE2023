import { useDispatch, useSelector } from "react-redux";
import { changeAge, addCount, subCount } from "./store";
import { changeName } from "./store/userSlice";

function App() {
  let state = useSelector((state) => {
    return state;
  });
  // console.log(state);
  console.log(state.user);
  console.log(state.user2);
  console.log(state.user3[0].count);

  let dispatch = useDispatch();

  return (
    <div>
      <h2>{state.user.name}</h2>
      <button
        onClick={() => {
          //얘가 직접 실행시키는게 아니라, dispatch한테 부탁하는거임~ store에게 함수실행시켜달라.
          dispatch(changeName());
        }}
      >
        이름바꺼조~
      </button>

      <h2>{state.user2.age}</h2>
      <button
        onClick={() => {
          dispatch(changeAge(2));
        }}
      >
        나이바꺼조~
      </button>

      <h2>{state.user3[0].count}</h2>
      <button
        onClick={() => {
          dispatch(addCount(0));
        }}
      >
        카운트올려조~
      </button>

      <button
        onClick={() => {
          dispatch(subCount(0));
        }}
      >
        카운트내려조~
      </button>
    </div>
  );
}
export default App;

//useSelector -> store안에 state를 이용하기 위해 사용
//useDispatch -> state변경 함수를 실행시키는 요청을 '보내기'위해 사용
