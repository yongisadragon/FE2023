import React, { Fragment } from "react";
import "./FragmentTest.css";

const items1 = [
  { id: 1, name: "Apple", desc: "빨간건 사과" },
  { id: 2, name: "Banana", desc: "바나나는 길어" },
  { id: 3, name: "Cherry", desc: "체리는 비싸" },
];

function ListItem({ item }) {
  return items1.map((fruit) => {
    return (
      <>
        <dt>{fruit.id}</dt>
        <dd>{fruit.name}</dd>
        <dd>{fruit.desc}</dd>
      </>
    );
  });
}

function Glossary(props) {
  return (
    <dl>
      <ListItem />
      {/* {props.items.map((item) => (
        <ListItem item={item} key={item.id} />
      ))} */}
    </dl>
  );
}

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function MyComponent() {
  return list.map((item) => {
    return (
      //div 대신 <React.Fragment>, <Fragment>, <> 모두가능
      //Fragment는 화면에 렌더링되는 요소가 아님.. 클래스로 css를 줘도 안됨. 단축 속성 <h1>에서도 속성을 쓸 수 없음
      <>
        <h1>{item.area}</h1>
        <p>{item.visited ? "방문함" : "아직 안감"}</p>
      </>
    );
  });
}

const items = [
  { id: 1, name: "Apple", desc: "빨간건 사과" },
  { id: 2, name: "Banana", desc: "바나나는 길어" },
  { id: 3, name: "Cherry", desc: "체리는 비싸" },
];

function ItemList() {
  //구조분해할당 id,name,desc
  const itemList = items.map(({ id, name, desc }) => {
    return (
      //Fragment key값 설정을 설정할 때에 써줌(완전 축약이 아닌 상태에서). 메모리상에 가지고 있음. 엘레먼트창에서 볼 수는 없을 것임.
      <React.Fragment key={id}>
        <dt>{name}</dt>
        <dd>{desc}</dd>
      </React.Fragment>
    );
  });
  //위에서 dt,dd를 map하는 것들을 상수(변수)에 담아서 따로 리턴을 하고 dl로 감싸주는 작업을 여기 안에서 진행함.
  return <dl>{itemList}</dl>;
}

function App() {
  return <ItemList />;
}
export default App;
