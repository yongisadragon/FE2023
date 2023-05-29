//로직과 스타일링 등(퍼블리싱)의 역할을 분리해줌. 얘는 그냥 데이터 받아서 버튼 만들어주는 컴포넌트임.
//Button.jsx
function Button(props) {
  console.log(props);
  console.log(props.children);
  return (
    <button
      onClick={props.onClick}
      style={{
        width: "50px",
        height: "50px",
      }}
    >
      {/* children은 태그와 태그사이에 들어가는 컨텐츠. 태그가 또 있으면 childre-children 꼬리물고 들어감 */}
      {props.children}
    </button>
  );
}

function Counter(props) {
  const 실행시키면num증가 = () => {
    props.setNum(props.num + 1);
  };
  const 실행시키면num감소 = () => {
    props.setNum(props.num - 1);
  };

  console.log(
    //이 콘솔로그 잘 봐야함. 버튼 태그 내부의 프로퍼티 내용들을 전부 볼 수 있음. jsx로 쓰인것들이 json으로 들어온다.. 이것은 곧 props로 흘러들어가는 내용들임.
    <button
      onClick={실행시키면num감소}
      style={{
        width: "50px",
        height: "50px",
      }}
    >
      -
    </button>
  );
  return (
    <>
      <span>여기 숫자 {props.num}</span>
      <div>
        <span>이름: 윤서준</span>
      </div>
      <Button onClick={실행시키면num증가}>+</Button>
      <Button onClick={실행시키면num감소}>-</Button>
      {/* <Button onClick={setNum(num + 1)}>-</Button> 만약 이딴식으로 하면 함수를 '바로' 실행시킨거다. 실행시키면num감소() 와 같이 함수를 쓴것과 같은 결과인데. {}안에는 함수를 호출하지말고 참조하듯이 가져와야한다. ()=> setNum(num + 1) 이렇게 써줘야함. */}
      {/* 아래 버튼처럼 일일이 적어 넣지않고 상단에 생성한 function button 컴포넌트를 만들고, 로직과 퍼블리싱 내용을 완전 분리해버림. 이는 json형식으로 흘러들어가는 props의 특성을 알고 관리할 수 있기 때문에 가능하다.*/}
      {/* <button
        onClick={실행시키면num감소}
        style={{
          width: "50px",
          height: "50px",
        }}
      >
        -
      </button> */}
    </>
  );
}
//Homepage.jsx

function HomePage() {
  const [num, setNum] = React.useState(0);
  // 원래는 Counter컴포넌트에서만 num이라는 state가 필요했다.
  // 그런데 그 상위에있는 Homepage에서 num라는 state가 필요해짐...
  // 상태 끌어올리기 언쩨씀???
  // 내가 전달해줄수없는 컴포넌트가 생겼을때 공통 부모에서 관리하도록 하고싶을때

  return (
    <>
      <h1>숫자 카운터 만들기</h1>
      <Counter num={num} setNum={setNum} />
      <div>{num * 2}</div>
    </>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HomePage />);
}

App();
