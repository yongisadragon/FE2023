import React from "react";
import styles from "./Question.module.css";
//module.css를 사용할 때 주의할 점은 적용하고자 하는 컴포넌트 이름과 반드시 일치시켜줘야합니다.예를들어 Detail.jsx 파일에만 적용해주고 싶은 module.css의 파일명은 Detail.module.css여야합니다. (참고, 현업에서는 styled-component 많이 씀.)
const Question = () => {
  return (
    // styles로 모듈 css를 가져올때, {}안에서 적용한다. 이러면 기존 클래스명 + 난수로 된 클래스명이 생성됨.
    <div className={styles.box}>
      <h2 className={styles.text}>Q&A</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
    </div>
  );
};

export default Question;
