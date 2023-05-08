import React from "react";
import "./MenuListItem.css";

export default function MenuListItem(props) {
  const onItemClick = () => {
    props.onClickEvt(props.mood);
  };

  const getBackgroundColor = () => {
    //MenuList에서 isSelected={props.mood === moodEl}프로퍼티를 참조한다.
    if (props.isSelected) {
      return "red";
    }
  };

  return (
    <li>
      <button
        className="btn-item"
        onClick={onItemClick}
        style={{ backgroundColor: getBackgroundColor() }} //
      >
        기분이: {props.mood}!
      </button>
    </li>
  );
}
