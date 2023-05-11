import React, { useState } from "react";
import "./Main.css";

export default function Main(props) {
  const [expert, setExpert] = useState("");
  const [trainingTime, setTrainingTime] = useState(0);

  // 시간 출력을 위한 상태 추가
  const [dday, setDday] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    setDday(Math.ceil(10000 / trainingTime));
  };

  return (
    <main>
      <h2 className="a11y">필요한 시간 알아보기</h2>
      <form className="cont-input" onSubmit={handleSubmit}>
        {/* 인풋에 들어가는 내용을 사용자가 p태그에 의해 충분히 인식 가능하기 때문에 label생략 */}
        <p className="txt-wannabe">
          나는
          <input
            onChange={(e) => setExpert(e.target.value)} //텍스트 변경값(onChange)가 있을 때마다, 해당 타켓의 벨류가 함수 인자로 전달
            type="text"
            value={expert}
            required
          />
          전문가가 될 것이다.
        </p>
        <p className="txt-time">
          그래서 앞으로 매일 하루에
          <input
            onChange={(e) => setTrainingTime(e.target.value)}
            type="number"
            value={trainingTime}
            required
          />
          시간씩 훈련할 것이다.
        </p>
        <button className="btn-exc" type="submit">
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>

      {/* section 얘 조건부 렌더필요.. 조건은 입력되는 시간이 0이 아니라면~ 렌더되라. 정도가 적당할 듯? */}
      {!!dday && (
        <section className="cont-result">
          <h3 className="a11y">결과 확인</h3>
          <p className="txt-wannabe">
            당신은 <strong>{expert}</strong> 전문가가 되기 위해서 <br />
            대략 <strong>{dday}</strong> 이상 훈련하셔야 합니다 :&#41;
          </p>
          {/* onClick -> App.js의 modalOpen함수가 실행-> setModalShow가 treu로 변경 -> 연산자에 의해 Modal렌더진행 */}
          <button onClick={props.modalOpen} className="btn-go" type="button">
            훈련하러가기 GO!GO!
          </button>
          <button className="btn-share" type="button">
            공유하기
          </button>
        </section>
      )}
    </main>
  );
}
