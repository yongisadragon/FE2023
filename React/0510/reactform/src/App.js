import { useState } from "react";
import EventForm from "./Components/EventForm";
import ItemGenerator from "./Components/ItemGenerator";

function App() {
  const [datas, setDatas] = useState([]);

  //datas 배열에 데이터를 추가하는 목적을 가지는 함수입니다.
  //첫 시작은 ...datas는 빈 내용일 것. 제출된게 없으니까. 한번 제출버튼하면 1객체가 쌓이고, 계속해서 쌓임. 그때 쌓이는게 setDatas속 2번째 인자 data이다. [data1, data2, data3, ...]
  const addData = (data) => {
    setDatas([...datas, data]);
  };
  console.log(datas);

  return (
    <>
      <ItemGenerator datas={datas} />
      <EventForm addData={addData} />
    </>
  );
}
export default App;

//EventForm에서 제출버튼을 누르면 form으로 전달 -> form에서 onSubmit을 통해 데이터 전달
