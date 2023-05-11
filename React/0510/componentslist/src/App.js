import { useState } from "react";
import MyList from "./Components/MyList";
import Counter from "./Components/Counter";
// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) => ( //같은 map으로 탄생한 li들은 형제들이며, key값은 이 형제들 사이에서 고유해야한다. 이말은, ul안에서 이 형제들은 id키값 1,2를 갖고, 밑에 const content에서 생성되는 div 2개도 id 1,2를 갖는다. 서로의 키값이 이름이 같읕지언정 각자의 컴포넌트 리스트 안에서만 유일하면 된다. 리액트는 이러한 key값 분별을 통해 재조정(Reconciliation)단계에서 어떤 엘리먼트가 변경되어야 하는지 인식함.
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
//   const content = props.posts.map((post) => (
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   ));
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   { id: 1, title: "Hello World", content: "Welcome to learning React!" },
//   { id: 2, title: "Installation", content: "You can install React from npm." },
// ];

// 해당 두줄의 내용은 index.js에 있으므로 안씀
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Blog posts={posts} />);

function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.

  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  // 키값은 꼭 문자열 숫자일 필요는 없다. 내용 그 자체(i)가 될 수 있다.
  const numComponentsArray = num.map((i) => (
    <h1 key={i}>
      안녕, {name} {i}호
    </h1>
  ));

  return <div>{numComponentsArray}</div>;
}

// function One() {
//   return <p>one</p>;
// }

// function Two() {
//   return <p>two</p>;
// }

// function Three() {
//   return <p>three</p>;
// }

// function Hello(props) {
//   const name = props.name;
//   if (name) {
//     return <One name={name} />;
//   } else {
//     return <Two />;
//   }
// }

// function One(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   );
// }

// function Two(props) {
//   return (
//     <div>
//       <h1>name이 입력된 것이 없습니다.</h1>
//     </div>
//   );
// }

// function NoName() {
//   return (
//     <div>
//       <h1>이름을 입력하지 않았습니다.</h1>
//     </div>
//   );
// }

function App() {
  // 초기값 datas는 '배열'의 형태임
  const [datas, setDatas] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);

  function handleClick(id) {
    //React는 state 함수의 호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리한다.
    //파라미터 id 는 버튼에 있는 item.id 이다.
    //사용하고 있는 데이터를 제어하기 위한 setdatas함수를 제어하기 위한 함수의 함수.
    //setData도 함수이므로 해당 모습으로 써줄 수 있음.
    setDatas((prevData) => {
      return prevData.filter((item) => {
        //filter는 원본 배열을 보존하고, 해당 조건에 맞는 녀석을 새로 반환함.
        //각 item은 title,price,id..을 품은 객체 한 덩어리
        //버튼이 가진 id와 item의 id가 일치하지 않으면 반환하겠다. 즉, 일치하는 녀석은 반환 '안'하겠다는 이야기임.
        return id !== item.id;
      });
    });
  }

  return (
    // <Hello name="" />

    <div>
      <Hello />
      {/* <Counter /> */}
      {datas.map((item, index) => {
        return (
          <li key={item.id}>
            <h2>
              {index + 1}
              {item.title}
            </h2>
            <p>{item.price}</p>
            {/* li제거 위해 타고 올라가서 직접 li를 삭제하는 과정.이건 버츄얼돔을 새롭게 만들지 않고 화면에서 JS를 이용, DOM에 접근해서 특정 UI를 직접 제거하는 행위로써, 리액트 입장에서 매우 억지(?)스럽고 유감스러운 일임. 개발의 일관성을 해치는 일임. 어디에선 상태관리를 해서 관리하고, 어디에서는 JS로 직접 관리를 하면 충돌이 일어날 여지가 있음. 직접 제어가 성능적으론 이점이 있을 수 있으나, 리액트의 방식을 무시할 수 있을 정도로 유의미 할 정도의 장점이 있는 것도 아님. */}
            {/* <button onClick={(event) => {event.target.closes("li").remove();}}> 삭제 </button> */}
            <button
              onClick={() => {
                handleClick(item.id);
              }}
            >
              삭제
            </button>
          </li>
        );
      })}
    </div>
  );
}
export default App;
