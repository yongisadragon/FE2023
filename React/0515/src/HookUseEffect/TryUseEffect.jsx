import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  useEffect(() => {
    // 새로고침 해봅시다. 그러면 클릭하지 않았는데도 "짝수입니다!"라는 메시지가 나옵니다. 이유는 useState(0)에서 count값을 0으로 초기화하면서 count의 값이 변하기 때문입니다.
    // 이게 지금 처음 입장했을때 실행이되고있다...
    // 이게 처음들어왔을때를 감지해서 안실행시키고싶다.
    // 실행을 시켜야할지 말아야할지에 대한 상태를 만들어줄까..?
    if (isFirstRender) {
      console.log("난 처음 렌더링되었는지 확인하고있지. 첫번째군");
      setIsFirstRender(false);
    } else {
      console.log("난 처음 렌더링되었는지 확인하고있지. 근데이건 두번째지");

      if (count % 2) {
        alert("홀수입니다");
      } else {
        alert("짝수입니다");
      }
    }
    // 리렌더링 전에는 컴포넌트를 지우고 다시 그리는데, 이 과정에서 지우기 전에 실행되는 부분입니다! 클린업 구간이라고 합니다.
    // [count]는 의존성 배열, 배열안의 변수가 변화가 있을 때마다, 즉 count가 바뀔때 마다 return안의 ()=>{}함수를 실행해줘. []만 있으면 최초 한번만.
    // return () => {
    //   alert("카운트가 바꼈어용");
    // }
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}
export default Counter;

010 - 6619 - 7374;
010 - 4618 - 1013;
010 - 5578 - 5793;
