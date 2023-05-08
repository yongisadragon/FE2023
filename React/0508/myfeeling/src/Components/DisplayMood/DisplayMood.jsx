import React from "react";
import "./DisplayMood.css";

export default function DisplayMood(props) {
  return (
    <div className="container">
      {/* props.mood값이 있어야지만 display됨 */}
      {props.mood ? `기분이 : ${props.mood}` : `아직 선택하지 않았어요!`}
    </div>
  );
}
