/* @jsx createElement */
import { createElement, render } from "./react.js";
function Title() {
  return createElement("div", null, createElement("h1", {
    className: "title"
  }, "hello react title"), createElement("strong", null, "good!!"), "\uD558\uC774");
}
// console.log(Title());
// render함수는 element/container/children 등을 받는다.
render(createElement(Title, null), document.querySelector("#root"));