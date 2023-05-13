import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={<MyButton text={"왼쪽"} onClick={() => {}} />}
          rightChild={<MyButton text={"오른쪽"} onClick={() => {}} />}
        />
        <h2>App.js</h2>
        <MyButton
          text={"버튼"}
          onClick={() => alert("클릭")}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("클릭")}
          type={"negative"}
        />
        <MyButton text={"버튼"} onClick={() => alert("클릭")} />

        {/* {process.env.PUBLIC_URL} : PUBLIC 폴더로 절대 경로 설정 */}
        <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} alt="" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
