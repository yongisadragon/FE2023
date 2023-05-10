import React from "react";
import "./EventForm.css";
import { useState } from "react";

export default function EventForm({ addData }) {
  function resetForm() {
    setTitle("");
    setDate("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    //handleSubmit를 통해 해당 객체에 대한 정보를 갖게 됨.
    const formData = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      date: date,
      food: food,
    };
    console.log(formData); //제출 버튼 이후, 생성되는 객체 상수명

    addData(formData);
    resetForm();
  }

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [food, setFood] = useState("짜장면");

  return (
    <>
      {/* 제출 버튼에서 온 서브밋이 form에서 onSubmit를 통해 handleSubmit를 실행함. 데이터에 id랑.. 제목들이 부여되는 형식 */}
      <form className="event-form" onSubmit={handleSubmit}>
        <label>
          <strong>Event Title : </strong>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          {/* onChange={setTitle()} 이런식이면 반환값이 들어가버리기 때문에 안됨. 함수를 실행시키게 해야함 */}
        </label>

        <label>
          <strong>Event Date : </strong>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>

        <label>
          <select onChange={(event) => setFood(event.target.value)}>
            <option value="짜장면">짜장면</option>
            <option value="탕수육">탕수육</option>
            <option value="짬봉">짬봉</option>
            <option value="김치">김치</option>
          </select>
        </label>
        <button type="submit">제출</button>
        <button onClick={resetForm} type="reset">
          초기화
        </button>
      </form>
    </>
  );
}
