// props로 넘길수 있는 데이터는 다양합니다. 문자열, 숫자형 등등 심지어 JSX 까지 데이터를 넘길 수 있습니다. App() 안에 Hello렌더 괄호안에 정보들이 있음.
function Hello(props) {
  return (
    <div>
      <p>
        my name is {props.name} and age is {props.age}
      </p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  );
}

export default Hello;
