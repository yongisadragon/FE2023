import styled, { css } from "styled-components";

const Button = styled.button`
  box-shadow: 0 0 10px 0;
`;

const ButtonStyle2 = styled(Button)`
  color: black;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
`;

const ButtonStyle3 = styled(ButtonStyle2)`
  color: yellow;
  border-radius: 20px;
  background-color: hotpink;
  transition: 0.3s;

  &:hover {
    transform: scale(9);
    background-color: skyblue;
    color: blue;
  }
`;

export { Button, ButtonStyle2, ButtonStyle3 };
