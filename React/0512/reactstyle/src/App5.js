import React from "react";
import styled, { css } from "styled-components";

//스타일만 상속 받고 싶은경우.
const One = css`
  color: red;
`;

const Two = css`
  border: 1px solid black;
`;

const Three = styled.div`
  ${One}
  ${Two}
`;

const App = () => {
  return <Three>Lorem ipsum dolor</Three>;
};

export default App;
