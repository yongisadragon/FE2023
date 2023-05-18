import React, { useEffect, useState } from "react";

//  버튼을 누를때마다, getName도 실행되는데, 이는 상태변화가 일어나서 리렌더링 되기 때문이다.
function getName() {
  console.log("사실은 겁나 오래기다리는중...");
  return "개리";
}

function App() {
  //useState의 인수로 getName()을 넘겨주는게 아닌, 함수자체 getName을 넘겨주면,(이게 복잡한 함수가 될지 어떻게 암?) 앞으로도 컴포넌트 업데이트가 일어날때 결과값이 바뀔일이 없을때..! 이렇게 쓰는 것을 lazy initialization이라고 한다.
  const [name, setName] = useState(getName);
  const [num, setNum] = useState(0);
  return (
    <>
      <div>
        안녕하세요 {name}! 현재 숫자는{num}입니다
      </div>
      {/* 함수형 업데이트 사용. useState는 비동기 코드이기 때문.. 이런걸 보고 방탄 코드.. 안전하다.. 리액트가 효율적으로 렌더링하기 위해 여러 개의 상태 값 변경 요청을 batch(일괄 처리) 처리하기 때문이다.  */}

      <button onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</button>
    </>
  );
}

export default App;
