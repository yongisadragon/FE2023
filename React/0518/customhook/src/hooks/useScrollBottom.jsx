// 사용되는 훅이 여기선 2가지.
import { useState, useEffect } from "react";

export default function useScrollBottom() {
  const [istBottom, setIsBottom] = useState(false);
  //스크롤이 끝에 도달했을 때, API를 요청하도록. 무한 스크롤

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(
      //   Math.ceil(document.documentElement.scrollTop + window.innerHeight)
      // );
      // console.log(document.documentElement.offsetHeight);
      //scrollTop은 스크롤바 이외의 남은 '윗' 영역
      setIsBottom(
        Math.ceil(
          document.documentElement.scrollTop + window.innerHeight + 30
        ) >= document.documentElement.offsetHeight
      );
    });
  }, []);

  // 이게 이 함수의 리턴값이자 알아내고자 했던 값. 목표
  return istBottom;
}
