import React, { useState } from "react";
import licat from "../../img/licat.png";

export default function InputContents() {
  const [job, setJob] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");

  const [resultjob, setResuljob] = useState("");

  const [modalshow, setModalShow] = useState(false);

  function modalClose() {
    setModalShow(false);
  }

  function modalOpen() {
    setModalShow(true);
  }

  const handleCopyToClipboard = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      alert("복사가 성공했어요! 웅.");
    } catch (err) {
      alert("복사가 실패했어요: ", err);
    }
  };

  // 위 코드를 then/catch로
  // function handleCopyToClipboard() {
  //   const url = window.location.href;

  //   navigator.clipboard
  //     .writeText(url)
  //     .then(() => {
  //       alert("URL이 클립보드에 복사되었습니다!");
  //     })
  //     .catch((error) => {
  //       alert("클립보드 복사에 실패했습니다:", error);
  //     });
  // }

  function resetForm() {
    setJob("");
    setTime("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const jobFocus = document.getElementById("job");
    const timeFocus = document.getElementById("time");

    if (job === "") {
      alert("어떤 분야의 전문가가 되고 싶으신가요?");
      jobFocus.focus();
    } else if (time === "") {
      alert("하루에 몇 시간씩 훈련할 건가요?");
      timeFocus.focus();
    } else {
      setDay(Math.ceil(10000 / time));
      setResuljob(job);
    }
    resetForm();
  }

  return (
    <>
      <p>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</p>
      <p>
        <strong>1만 시간의 법칙</strong>은 어떤 분야의 전문가가 되기 위해서는
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          나는
          <input
            id="job"
            onChange={(event) => setJob(event.target.value)}
            type="text"
            value={job} //이 value값을 넣어주는 것은 resetForm동작을 위해 필수적으로 적어넣자. 없으면 동작안함.
            placeholder="예)프로그래밍"
          />
          전문가가 될 것이다.
        </label>
        <br />
        <label>
          그래서 앞으로 매일 하루에
          <input
            id="time"
            onChange={(event) => setTime(event.target.value)}
            type="number"
            value={time}
            placeholder="예)5시간"
          />
          시간씩 훈련할 것이다.
        </label>
        <br />
        <button type="submit">
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>

      {day && (
        <section>
          <p>
            당신은 <strong>{resultjob}</strong> 전문가가 되기 위해서
          </p>
          <p>
            대략 <strong>{day}</strong> 일 이상 훈련하셔야 합니다! :&#41;
          </p>

          <button type="button" onClick={modalOpen}>
            훈련하러 가기
          </button>
          <button type="button" onClick={() => handleCopyToClipboard()}>
            공유하기
          </button>
        </section>
      )}
      {modalshow && (
        <article onClick={modalClose} id="modal">
          <div className=" modal-wrap">
            <h2>화이팅!😊🔥</h2>
            <h3>당신의 꿈을 응원합니다!</h3>
            <img src={licat} alt="응원하는 라이캣" />
            <button className="btn-close" type="button">
              종료하고 진짜 훈련하러 가기 GO! GO!
            </button>
          </div>
        </article>
      )}
    </>
  );
}
