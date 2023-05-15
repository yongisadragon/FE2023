import { useState, useMemo } from "react";

function 부하() {
  console.log("계산 중");
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
    // sum % 100000000 === 0 && console.log(sum);
  }
  console.log("계산 끝");

  return sum;
}

//숫자가 카운트되는 버튼을 누를때마다, 부하가 큰 함수를 실행시킨다. 두개가 다른 점은 의존성 배열이 있고 없고 차이이며, 배열안의 값의 변화(countTwo)가 생겼을 때에.. 부하 함수를 실행..한 뒤, result에 넣어줌. 만약 의존성 배열 안의 값이 바뀌지 않았다면, 이전에 계산한 값을 가져온다.
function TryUseMemo() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  console.log("랜더링!!");

  const result = useMemo(() => {
    return 부하();
  }, [countTwo]);

  return (
    <div className="App">
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
    </div>
  );
}
export default TryUseMemo;
