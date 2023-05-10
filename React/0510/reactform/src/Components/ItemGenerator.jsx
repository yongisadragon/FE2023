import React from "react";

// 리액트는 기본적으로 형제 위상에 있는 애들끼리 데이터를 못 주고 받는다고 얘기하려던 찰나, 상태끌어올리기로 부모로 옮긴 다음, 부모가 다시 아이템으로 줘야함. 지금은 이벤트폼과 아이템 제너레이터간에 데이터가 주고 받아져야함.
export default function ItemGenerator({ datas }) {
  return (
    <>
      {datas.map((data) => {
        return (
          <div key={data.id}>
            <h2>
              {data.id}. {data.title}
            </h2>
            <time>{data.date}</time>
            <strong> {data.food}</strong>
          </div>
        );
      })}
    </>
  );
}
