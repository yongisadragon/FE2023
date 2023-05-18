import { useState, useEffect, useLayoutEffect } from "react";

function App() {
  const [value, setValue] = useState(100);

  //useEffect는 렌더링 이후에 행동하기 때문에, 순간(깜빡임) 1000이 됐다가, 300으로 바뀜.
  useEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);

  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div
        style={{ width: value, height: value, backgroundColor: "blue" }}
      ></div>
      <button
        onClick={() => {
          setValue(1000);
        }}
      >
        커져랏!
      </button>
      <button
        onClick={() => {
          setValue(200);
        }}
      >
        작아져랏!
      </button>
    </div>
  );
}

export default App;

//useLayoutEffect는 내부적으로 컴포넌트 업데이트(렌더링)되기전에 특정 행동을 수행. useEffect는 렌더링이 끝나고 특정 행동을 수행. 그래서 useEffect는 깜빡 거림이 존재할 수 있음.
