/* @jsx createElement */
import { createElement, render } from "./react.js";

function Title() {
  return (
    <div>
      <h1 className="title">hello react title</h1>
      <strong>good!!</strong>
      하이
    </div>
  );
}
// console.log(Title());
// render함수는 element/container/children 등을 받는다.
render(<Title />, document.querySelector("#root"));
