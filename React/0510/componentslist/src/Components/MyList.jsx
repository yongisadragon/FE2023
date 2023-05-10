import React from "react";

export default function MyList() {
  const items = [
    { id: 1, name: "해장국" },
    { id: 2, name: "갓치찌개" },
    { id: 3, name: "무국" },
  ];

  const itemList = [];

  items.forEach((item) => {
    //생성, 푸쉬 반복. forEach는 리턴값이 따로 없기 때문에 빈 배열로 직접 넣어준다.
    itemList.push(<li key={item.id}>{item.name}</li>);
  });

  return <ul>{itemList}</ul>;
}
