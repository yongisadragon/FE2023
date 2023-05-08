import React from "react";
import MenuListItem from "../MenuListItem/MenuListItem";
import "./MenuList.css";

//props는 상위에서 전달 받은 값
export default function MenuList(props) {
  const menus = ["좋아요!", "진짜 좋아요!", "최고에요!", "미쳤어요!"];
  return (
    <ul className="container-list">
      {/* 이 map순회와 <MenuListItem/>렌더에 의해 4개의 li가 생성될 것임. */}
      {menus.map((moodEl) => {
        return (
          <MenuListItem
            mood={moodEl}
            // mood : 기분의 텍스트, isSelected : moodEl들을 props.mood와 비교, props.mood는 사용자가 선택한 무드, 즉 상위에 currentMood와 비교해서 t/f반환, props.onItemClick : 현재 기분을 변경하는 함수
            isSelected={props.mood === moodEl} //현재 감정 상태 t/f로 표현됨
            //onClick은 App.js에서 받은 프랍스를 또 아래 프랍스로 보내줄 세팅
            onClickEvt={props.onItemClick}
          />
        );
      })}
    </ul>
  );
}
