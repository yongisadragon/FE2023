import React from "react";
import { useState } from "react";

function ButtonList(props) {
  const [feel, setFeel] = useState("");

  function feelGood() {
    if (feel !== props.good) {
      setFeel(props.good);
    } else {
      setFeel("");
    }
  }
  function feelSad() {
    if (feel !== props.sad) {
      setFeel(props.sad);
    } else {
      setFeel("");
    }
  }
  function feelAngry() {
    if (feel !== props.angry) {
      setFeel(props.angry);
    } else {
      setFeel("");
    }
  }
  function feelWeird() {
    if (feel !== props.weird) {
      setFeel(props.weird);
    } else {
      setFeel("");
    }
  }

  return (
    <>
      <button onClick={feelGood} type="button">
        기분이: 좋아요!😊
      </button>
      <button onClick={feelSad} type="button">
        기분이: 슬퍼요!😊
      </button>
      <button onClick={feelAngry} type="button">
        기분이: 나빠요!😊
      </button>
      <button onClick={feelWeird} type="button">
        기분이: 이상해요!😊
      </button>

      <div>{feel}</div>
    </>
  );
}

export default ButtonList;

//오직 부모 -> 자식 컴포넌트로 값을 props로 보내는 것만 가능하다. 리액트에서 데이터가 흐르는 방향은 항상 이렇다.
//근데 자식에서 부모로 보내려면? 안된다며!! 안된다며!! 하지만 그 방법 같아 보이는 것이 있었으니.. 하지만 부모(App.js)에서 자신(부모)의 상태를 바꾸는 메서드를 만든 뒤, 자식에게 보내면 자식에서 부모를 조작하는 것 같아 보이는 그것이 가능해(?) 보인다
