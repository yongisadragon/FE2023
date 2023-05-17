import React, { createContext, useContext } from "react";
import HelloLicatTwo from "./HelloLicatTwo";

const UseInfo = createContext({ name: "yong", age: 26 });

const App = () => {
  return <HelloLicat />;
};

const HelloLicat = () => {
  // 사용하고 싶은 자손 컴포넌트에 구조분해할당으로 name과 age값을 useContext를 통해 빼온다. 인자값은 UseInfo상수.HelloLicat은 현재 App메인 페이지에 같이 있으므로 바로 사용할 수 있지만, HelloLicatTwo에서는 import를 통해 사용하고 있다.(해당 페이지에선 UseInfo를 export해주는 방식을 이용하고 있다.)
  const { name, age } = useContext(UseInfo);
  return (
    <>
      <h2>{name}</h2>
      <p>저는 자손 컴포넌트1 입니다.</p>
      <strong>{age}</strong>
      <HelloLicatTwo />
    </>
  );
};

export { App, UseInfo };
