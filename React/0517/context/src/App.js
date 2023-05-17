import { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return (
    <>
      <HelloLicat />
    </>
  );
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {/* 콜백함수를 활용해서 그 인자에 컨텍스트의 데이터가 흘러들어간다. */}
      {(value) => {
        return (
          <div>
            <h2>{value.name}</h2>
            <strong>{value.id}</strong>
            <HelloLicatTwo />
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>{value.name}</h2>
            <strong>{value.id}</strong>
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
};

export default App;
