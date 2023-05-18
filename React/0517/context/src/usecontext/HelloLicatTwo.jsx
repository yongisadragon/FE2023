import React, { useContext } from "react";
import { UseInfo } from "./App";

export default function HelloLicatTwo() {
  const { name, age } = useContext(UseInfo);
  return (
    <>
      {/* 해당 프로퍼티들은 useContext(UseInfo)의 비구조할당을 통해 App.jsx로 부터 왔다. */}
      <h1>이건 이름 {name}</h1>
      <p>
        createContext, useContext사용 예제입니다. <br /> 저는 자손 컴포넌트
        1안에 있는 2입니다.
      </p>
      <p>이건 나이 {age}</p>
    </>
  );
}
