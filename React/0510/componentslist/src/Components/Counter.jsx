import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount(count + 1);
    // setCount(count + 1);
    //똑같은 set함수를 두번쓴다고 +1이 두번 실행되지 않는다. state를 변화시키는 set함수는 비동기처럼 동작해 바로 상태변수의 변화를 반영하지 못하기 때문에
    //이전 상태를 리액트가 보장하기 위해
    //이전 상태, 이전 값을 근거로 값을 조작할 경우에는, 이런식으로 사용한다.
    setCount((prevNumber) => prevNumber + 1); //중괄호 있으면 return 잊지 말기
  }
  function handleMinus() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>Counter: {count}</h1>
      <button on onClick={handlePlus}>
        +1
      </button>
      <button onClick={handleMinus}>-1</button>
    </>
  );
}
