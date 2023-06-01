function App() {
  // 화면에 값 변하는거 쓰고싶으면 useState쓰셈 ㅋ
  // state랑 setState가 있는데 setState는 state를 바꿀때 사용
  // setState를 이용해서 값을 바꾸면 화면이 새로그려짐!!
  const [num, setNum] = React.useState(0);
  const [num2, setNum2] = React.useState(0);

  console.log('리렌더링^^'); // 아니이렇게 이펙트 바깥에서 작업하면 리렌더링때마다 실행할 수 있는데 이펙트에 의존성배열 없이 쓰는건 왜 있는거임? 그야.. 클린업을 사용할 수 있기 때문에.. 웬만하면 유즈이펙트에 클린업 쓴답니다~..
  React.useEffect(() => {
    console.log('마운트됐읍니다. 한번만 보일거에용');
  }, []);
  React.useEffect(() => {
    console.log('num이 바꼈음요. 난 이펙트');
  }, [num]);
  //useEffect(()=>{},[]) 1인자 콜백함수: 매개변수로 어떤 콜백함수를 넣어줌, 2인자는 의존성배열[]로써 특정 조건에서 1인자 콜백함수가 효과를 일으키도록함. 1인자는 의존성배열에 의존하고 있는 '효과'임. 참고로 리렌더링이 되면 기본적으로 한번 실행이됨. 결론: useEffect는 [의존성배열]안의 값이 바뀌면 효과를 발생시킨다! 의존성 배열이 없으면 항상 실행, 빈값이면 한번만 실행, 값이 있으면 값이 변경될때만 실행.
  //그럼 일어나는 타이밍은 언제언제? 일단 가장 마지막 단계, 렌더-페인트가 끝나고 클린없까지 한 다음에 일어남. 이건 리액트 생명주기와 관련있는 것임. 그리고 이것은 리액트 설계자들이 설정해놓은 순서임. 다시 순서보려면 교안들어가서 보삼. 기본적으로 마운트(컴포넌트가 리액트에 장착될때)/업데이트(리렌더링)/언마운트(컴포넌트가 없어질때) 3단계안에서 클린업, 이펙트, 렌더, 페인터 등 다양한 작업들이 실행됨..
  // 함수가 쭉 실행되면서 return아래 값들을 그려주는(버츄어 돔에다가)과정을 렌더라고함. paint screen 이전.
  //즉, 이펙트는 상태값과 관련해서 어떤 효과를 일으키고 싶다~일때. 그리고 일어나는 타이밍을 잘 유념하면 더 잘쓸 수 있을듯 보통 fetch, axios 이런거 할때 이펙트에 담아서 자주 쓰곤 한다.
  React.useEffect(() => {
    console.log('num2가 바꼈음요. 난 이펙트');
    return () => {
      console.log('num2에 의존하는 클린업임');
      console.log('그리고 언마운트도 됐어여.');
    }; //클린업은 전 이펙트가 끝나고 다음 이펙트가 실행될때의 후속단계임. 즉 지금 시작하는 이펙트 입장에서는 먼저 실행됨. 다음 이펙트로 넘어가기 이전에 책상을 치우는 일. 클린업이 발생하는 이유는 즉 이펙트가 일어났기 때문에. 그리고 언마운트에만 어떤 실행을 원해? 그럼 당연히 클린업안에서 실행시키면됨. 언마운트일때 실행되는애는 클린업 뿐이니까.
  }, [num2]);

  return (
    <div>
      {num} 뭐하라고 있는거임?
      <button
        onClick={() => {
          setNum(num + 1);
          console.log(num); //이거 한번 꼭 잘 확인해보시길. 한번 누르면 num이 1로 변화(리렌더링으로 넘어가기 전 콘솔에 찍히는 num은 0으로 나옴.) 리렌더링 될 때에는 함수가 한번 더 실행된다.
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          setNum2(num2 - 1);
        }}
      >
        빼기
      </button>
    </div>
  );
}

function index() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
}

index();

// react-dom이라는 라이브러리에서 React라는 클래스를 import 해온다(가져온다).
// ReactDOM이라는 클래스에 있는 render 함수를 이용해서
// document(페이지)에 있는 id가 root라는 요소를 가져와서 즉, index.html에 있는 <div id="root"></div> 이 요소에 우리의 root 컴포넌트를 연결시켜준다.
// 그래서, render 함수가 호출이 되면 index.html에 있는 <div id="root"></div> 여기 이 부분에 우리 컴포넌트가 연결이 되는 것이다!
//<React.StrictMode />는 생략이 가능하다.
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
