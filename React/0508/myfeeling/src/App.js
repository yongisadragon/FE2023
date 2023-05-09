// import ButtonList from "./Components/ButtonList";
import { useState } from "react";
import MenuList from "./Components/MenuList/MenuList";
import DisplayMood from "./Components/DisplayMood/DisplayMood";

function App() {
  //하위 listItem에서 currentMood를 바꾸는 함수를 보내줘서 아래에서 위가 바뀌도록 세팅해준다.
  //currentMood는 기분. setCurrentMood 얘는 기분을 바꿔줄 수 있는 유일한 함수. 이 함수를 애들한테 뿌려줘서 값을 다시 받아오는 과정
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      {/* 메뉴리스트로 현재기분과 기분을 바꿀 수 있는 메서드를 보낸다. 프로퍼티 형식으로(props)자식에게. 따라서, 부모 컴포넌트에서 <DisplayMood /> 컴포넌트를 호출할 때, "currentMood" 값이 "mood" 프로퍼티로 전달*/}
      <MenuList mood={currentMood} onItemClick={setCurrentMood} />
      {/* 디스플레이무드로 현재기분을  보낸다. */}
      <DisplayMood mood={currentMood} />

      {/* <ButtonList
        good="기분이: 좋아요!😊"
        sad="기분이: 슬퍼요!😊"
        angry="기분이: 나빠요!😊"
        weird="기분이: 이상해요!😊"
      /> */}
    </div>
  );
}
export default App;

