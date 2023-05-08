import { useState } from "react";
import "./Resume.css";

export default function Resume(props) {
  // let like = 0;

  // function clickLike() {
  //   like += 1;
  //   console.log(like);
  // }

  const [like, setLike] = useState("");
  //const [like, setLike] = useState(0); //초깃값(like)이 0이란 의미. setLike는 관리해주는 상수의 이름을 참고하고, setLike는 like값을 변경하기 위한 함수임을 알 수 있습니다.
  //console.log(useState(0)); //(2) [0, ƒ]
  function clickLike() {
    if (like === "") {
      setLike("Like");
    } else {
      setLike("");
    }
  }
  // function clickLike() {
  //   // +1 은 기존의 like 값과 1을 더해 새로운 값을 반환하는것이고
  //   // ++ 변수의 값 자체를 직접적으로 변경하려는 시도입니다. 안된다는 뜻
  //   setLike(like + 1);
  //   setTxt(txt);
  //   console.log(like);
  // }
  return (
    <>
      <div className="resume">
        <h2>{props.name}의 자기소개서</h2>
        <strong>{props.hello}라고 하고 싶네요.</strong>
        <dl>
          <dt>취미는</dt>
          <dd>{props.hobby}이구요</dd>
          <dt>좋아하는 음식은</dt>
          <dd>{props.food}에요.</dd>
          <dt>좋아하는 색은</dt>
          <dd>딱히 없는데 음 {props.color} 입니다.</dd>
        </dl>
        {/* 단순히 변수의 '값(like)'만 변할 뿐. 모든 변수가 변할때마다 컴포넌트를 업뎃하면 리소스 낭비가 심함. */}
        {/* 그래서 특정 변수를 지정하여 그 변수가 변할 때마다 컴포넌트(함수나 클래스)를 업데이트하라는 명령을 내려주어야 합니다. 자세한 내용은 txt참조 */}
        <button onClick={clickLike}>
          like <span>{like}</span>
        </button>
        {/* value={txt} 이러면 값이 전혀 안변함 */}
        {/* <input type="text" value={txt} /> */}
      </div>
    </>
  );
}
