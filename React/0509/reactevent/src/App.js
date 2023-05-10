import { useState } from "react";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import Modal from "./Components/Modal";

function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.

  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i) => (
    <h1>
      안녕, {name} {i}호
    </h1>
  ));

  return <div>{numComponentsArray}</div>;
}

function App() {
  const user = {
    idUser: "ckfflekfxms",
    //비밀번호는 숫자문자특수기호로 받을 수 있기 때문에 문자열로 조정해야함.
    pwUser: "1234",
  };
  //login이란 값은 setLogin으로 변경 가능함.

  const [login, setLogin] = useState(false);
  //모달의 상태를 관리하는 상수(팝업이면 true, 닫으면 false -> 자식컴포넌트로 전달)
  const [modalShow, setmodalShow] = useState(true);

  function modalClose() {
    setmodalShow(false);
  }

  // 삼항식을 이용해서, 로그인 값이 true라면 Homepage.jsx가 뜨고, 아니라면 로그인창을 그대로.
  return (
    <>
      <Hello name="licat" />
      {login ? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />}
      {/* &&에서 둘다 true면 끝의 truthy, 처음만나는 falsy, 즉 버튼을 누르면 modalShow가 setmodalShow에 의해 false가 되면서 뒤로 안넘어감. <Modal/>을 jsx 변환에 돌리면 함수로 나오는데, 함수는 본래값이 true이다. !function(){}을 검사해보면 알 수 있다. */}
      {modalShow && (
        <Modal modalClose={modalClose}>
          {/* jsx로 보낼때 자식에서 props.chidren으로 받을 수 있다. 내용을 동적으로 바꿀 수 있음. */}
          <h2>사용약관에 대해 말씀드리겠습니다.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            illum laborum, quo facilis eaque quam optio aliquam nam provident.
            Laboriosam delectus, atque doloremque nam harum molestias ab
            quisquam! Quis, pariatur.
          </p>
        </Modal>
      )}
    </>
  );
}

export default App;

// 자식에서의 정보를 어떻게 App으로 빼내오지?
