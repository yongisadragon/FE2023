import React from "react";
import styled from "styled-components";

const ContentOne = styled.div`
  margin: 40px;
`;

const ContentTwo = styled.div`
  color: red;
`;
//다른 스타일 컴포넌트를 상속. 아래처럼 확장해서 사용할 수 있습니다.
const ContentThree = styled(ContentTwo)`
  border: 1px solid black;
`;

const UniAfter = styled.div`
  &:after {
    content: "!!";
  }
`;

function App() {
  return (
    <div>
      <UniAfter>gooood</UniAfter>
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>
    </div>
  );
}

export default App;
