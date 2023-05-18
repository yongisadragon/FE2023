import { useState, useEffect } from "react";

export function useMouseLoc(initVal) {
  const [mouseLoc, setMouseLoc] = useState(initVal || { x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      // event에는 마우스에 대한 정보가 담겨있음(콘솔해보면 마우스 좌표 버버벅찎힘)
      // console.log(event.x, event.y);
      // mouseLoc이 변하게 됨.
      setMouseLoc({ x: event.x, y: event.y });
      // console.log(mouseLoc);
    });
  }, []);

  return mouseLoc;
}
