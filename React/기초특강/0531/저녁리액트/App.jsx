const NumContext = React.createContext();
function ShowNum(props) {
  const numContext = React.useContext(NumContext);

  // props.num 불러오는 무언가...대신하는거
  return <div>{numContext.num}</div>;
}

// Button.jsx
function Button(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        width: "50px",
        height: "50px",
      }}
    >
      <ShowNum />
      {props.children}
    </button>
  );
}
function Counter() {
  const numContext = React.useContext(NumContext);
  return (
    <>
      <span>연봉 {numContext.num}</span>
      <div>
        <span>이름:우경석</span>
      </div>
      <Button onClick={numContext.더하기}>+</Button>
      <Button onClick={numContext.빼기}>-</Button>
    </>
  );
}

function ShowDubble() {
  const numContext = React.useContext(NumContext);
  return <div>{numContext.num * 2}</div>;
}

function NumContextProvider({ children }) {
  const [num, setNum] = React.useState(0);
  const 더하기 = () => {
    setNum(num + 1);
  };
  const 빼기 = () => {
    setNum(num - 1);
  };
  return (
    //Context의 단점. 안에 사용된 스테이트, 프로퍼티가 하나라도 변화하면 다른 스테이트나 프로퍼티들이 오염되듯 가지고 있으면 다 변화됨. 하나의 통쨰로 된 객체가 다 영향을 받는거임. 새로운 컨텍스트를 만들어서 각각의 문맥을 구성할수있게 분리.
    <NumContext.Provider value={{ num: num, 더하기: 더하기, 빼기: 빼기 }}>
      {children}
    </NumContext.Provider>
  );
}

// HomePage.jsx
function HomePage() {
  // Homepage에서 쓰지도 않는 더하기 빼기 함수를 여기에 쓰니까 열받네? 열받아. 따로 숫자계산하는 함수(컴포넌트)를 만들어야겠어.
  // const [num, setNum] = React.useState(0);
  // const 더하기 = () => {
  //   setNum(num + 1);
  // };
  // const 빼기 = () => {
  //   setNum(num - 1);
  // };
  return (
    <NumContextProvider>
      <h1>숫자 카운터 만들기</h1>
      <Counter />
      <ShowDubble />
    </NumContextProvider>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HomePage />);
}

App();
