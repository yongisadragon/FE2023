import React, { useState, useEffect } from "react";

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링이 됩니다..?"); //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.
  //코드에서 다음 발생할때 문제가 생길만한 예시(setInterval이 무한으로 쌓이는 것)를 클린업으로 지워준다.
  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
      setHour(today.getHours());
      setMin(today.getMinutes());
      setSec(today.getSeconds());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [today]);
  // setInterval(() => {
  //   setToday(new Date());
  //   setHour(today.getHours());
  //   setMin(today.getMinutes());
  //   setSec(today.getSeconds());
  // }, 1000);
  // setIntv는 Time이 그려질때 실행되는데, 화면이 그려진다는 것은 Time함수를 실행하는건데.. 함수를 또 실행했으니까 또 setIntv이 생김.. 1초마다 setStategownsms intv이 2개니까.. 1초에 2번하는 중.. 또 1초 있으면 2번일어남.. 그래서 2,4,8,16.. 무한으로 계속 생겨남
  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default Time;

// setTimeout(() => {
//   const today = new Date();
//   setToday(today);
//   setHour(today.getHours());
//   setMin(today.getMinutes());
//   setSec(today.getSeconds());
// }, 1000);

// const date = new Date();
// const [today, setToday] = useState([date.getHours(), date.getMinutes(), date.getSeconds()]);
// useEffect(() => setToday([date.getHours(), date.getMinutes(), date.getSeconds()]), [date]);

// return (
//     <>
//         <div>
//             {today[0]}시 {today[1]}분 {today[2]}초
//         </div>
//     </>
// );
