import React, { useState, useEffect, useRef } from "react";

function Counter2() {
  const [num2, setNum2] = useState(0);
  // let num = 0;
  const num = useRef(0);

  return (
    <>
      {/* 첫번째 버튼은 Counter2 함수를 새로 리렌더링, 다시 실행시키는 버튼이므로 버튼 2에서 실컷 쌓아도 버튼1을 누르면 다시 실행되면서(setNum2에 의해.. 리액트가 관리하는 애이기 때문), 위의 let num = 0;을 거치며 num은 화면이 바뀔때마다(버튼1을 클릭했을 때마다) 0이 됨... 물론 버튼 2를 눌러도 렌더링이 되진 않고, 콘솔상에서 변수 값만 변화한다. useState를 통한 1번 버튼의 num2만이 렌더링 되어 보여진다. 이말은, 변수로 만들어놓은 것은 리렌더링 될때마다 함수안의 모든 코드들이 실행되기 때문에 변수의 값이 변화가 일어났어도 다시 초기화 된다.버튼1에 의해 num이 없어지는게 맞음. 이전 함수의 리턴값을 기억 못한다라는 말로도 쓸 수 있다. */}
      {/* useRef를 쓰면 일반 변수로 관리하고 싶은 값을 기억해줄게! */}
      <button onClick={() => setNum2(num2 + 1)}>버튼</button>
      <div>{num2}</div>
      <button
        onClick={() => {
          // num += 1;
          // console.log(num);
          num.current += 1; //얘는 리액트 안의 값을 '참조'해서 그냥 넘긴 것임. setNum처럼 화면에 그려주는 역할이 아님. 그래서 리렌더링이 될때에만 기억된 값에 의해 화면에 넣어주는 것이다. 이 전체 코드에서 화면을 리렌더링 해주는 애는 첫 번째 버튼에 의해서 만이다.
          console.log(num.current);
        }}
      >
        버튼
      </button>
      {/* <div>{num}</div> */}
      <div>{num.current}</div>
    </>
  );
}

export default Counter2;

//Ref는 계속기억하기 때문에.. 남용하면 안됨. 리액트의 장점인 재사용성을 생각한다면 권장되지 않음. 메모리 낭비등의 문제가 발생할 수도 있음.
