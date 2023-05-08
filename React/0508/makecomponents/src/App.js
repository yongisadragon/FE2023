import { Fragment } from "react";
import Hello from "./Components/Hello";
import Time from "./Components/Tiem";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";

//컴포넌트 분리
//컴포넌트도 쓰이는 목적에 의해 네이밍을 할 것.
function Licat(props) {
  const name = "라이캣!";
  const someStyle = { backgroundColor: "black", color: "white" };
  return (
    <div>
      <h1 style={someStyle}>안녕, {props.name} 1호</h1>
      <h1>안녕, {props.name} 2호!</h1>
      <div className="newClass" />
    </div>
  );
}

//이렇게 만든 <Licat/>과 <Time/> 을 컴포넌트라고 부릅니다. 그리고 App() 도 하나의 컴포넌트임을 알게 되었습니다. 이때 주의할 점은 컴포넌트의 이름을 지을 때는 첫 글자를 대문자로 작성해야 컴포넌트로 해석됩니다.
// <Licat/>, <Time/> 그리고 App()들 모두 컴포넌트라고 한다.
// 컴포넌트 네이밍 시 첫 글자를 대문자로 작성해야 컴포넌트로 해석함
// 이렇게 컴포넌트를 만드는 것이 사용자 정의 태그로 만드는 것
function App() {
  return (
    <>
      {/* 라이켓 모음 */}
      <Licat name="gary" />
      {/* 시간보여주기 */}
      <Time />
      <Hello
        name="jaehyun"
        age={25}
        someFunc={() => "awesome!!!"}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
      />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
    </>
  );
}

export default App;
