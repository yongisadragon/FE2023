import { plus } from "./plus.js";
//js파일에 css파일을 불러올 수 있는것은 웹팩이 css파일도 하나의 모듈로 다룰 수 있기 때문입니다.
import "./style.css";
// import rabbit2 from "../img/rabbit2.png";
// console.log(plus(2, 4));
// console.log(dev, pro);

let env;
if (process.env.NODE_ENV === "development") {
  env = dev;
} else {
  env = pro;
}

console.log(process.env.NODE_ENV);

//DOMContentLoaded는 DOM파싱이 끝난 직후. 돔트리가 완성된 이후. 이건 걍 이미지를 base64로 변환해주는 것임. 이미지를 로드하는게 아니라 텍스트로 풀어내는 것임.
document.addEventListener("DOMContentLoaded", () => {
  // document.body.innerHTML = `<img src="${rabbit2}"`;
});
