import { useState } from "react";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import Modal from "./Components/modal/Modal";
import InputContents from "./Components/inputcontents/InputContents";

function App() {
  // 모달을 껐다 켰다하려면 상태를 위한 저장공간이 필요..
  // const [modalshow, setModalShow] = useState(false);

  // function modalClose() {
  //   setModalShow(false);
  // }

  // function modalOpen() {
  //   setModalShow(true);
  // }

  return (
    <div id="app">
      <InputContents />
      {/* <Header />
      <Main modalOpen={modalOpen} />
      <Footer /> */}
      {/* 초기값은 false라서 앞에서 멈춘다. 이 값을 변화하기 위해선 Main 버튼을 이용해야 하므로, 메인으로 프로퍼티를 전송하자.*/}
      {/* {modalshow && <Modal modalClose={modalClose} />} */}
    </div>
  );
}
export default App;
