import React, { useMemo, useRef, useState } from "react";

export default function App() {
  // const inputName = useRef("");
  // const inputId = useRef("");
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  function handleInputName(e) {
    console.log(e);
    setName(e.target.value);
    console.log("렌더링 - 1");
  }

  function handleInputId(e) {
    console.log(e);
    setId(e.target.value);
    console.log("렌더링 - 2");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newInfo = [...userInfo, { name, id }];
    // inputName.current.value = "";
    // inputId.current.value = "";
    setId("");
    setName("");
    // inputName.current.focus();
    // e객체에는 form안에 속한 input 2개와 버튼이 0,1,2의 순서를 가진채 유사배열 객체 형태로 들어가 있다.
    console.log(e);
    e.target[0].focus();
    setUserInfo(newInfo);
    console.log("렌더링 - 3");
  }

  // 모든 렌더링에 함께 렌더링되는 이슈가 있습니다.
  function getNum(li) {
    console.log("렌더링!");
    return li.length;
  }

  // getNum은 userInfo가 변화 될때만 실행됨.
  const num = useMemo(() => {
    return getNum(userInfo);
  }, [userInfo]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInputName}
          value={name}
          // ref={inputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={handleInputId}
          value={id}
          // ref={inputId}
        />
        <button type="submit">회원 명부 작성</button>
      </form>
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>이름 : {value.name}</h3>
            <strong>아이디 : {value.id}</strong>
          </li>
        ))}
      </ul>
      {/* getNum은 버튼을 눌렀을 때에만 실행되게 하는게 좋다.. 인풋에 한글자를
      넣을때마다 이 함수도 실행되고 있다. */}
      <span>현재 회원 수 : {num}</span>
    </>
  );
}
