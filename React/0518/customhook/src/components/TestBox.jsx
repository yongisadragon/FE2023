import React from "react";
import { useMouseLoc } from "../hooks/useMouseLoc";

export default function TestBox() {
  const location = useMouseLoc();
  // console.log(location);
  return (
    <div
      style={{
        height: 100,
        width: 100,
        backgroundColor: location.y > 200 ? "royalblue" : "hotpink",
      }}
    >
      TestBox
    </div>
  );
}
