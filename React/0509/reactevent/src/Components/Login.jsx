import { useState } from "react"; //이거 없으면 useState작동 안됩니당

export default function Login({ infoUser, setLogin }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (id === "") {
      alert("아이디를 입력하지 않았습니다.");
    }
    if (pw === "") {
      alert("패스워드를 입력하지 않았습니다.");
    }
    // alert(`id : ${id}, pw : ${pw}`);
    //만약 id와 pw가 둘다 일치한다면, 로그인이 '된'상태로 바꾸기 위해 true를 전달해준다. 자식 컴포넌트에서 바꾼 상태를 부모에 적용하는 것: 상태 끌어올리기. 이거 ㄹㅇ 핵심이에요 set함수로 부모요소에게 변경할 값 전달하는거.
    if (id === infoUser.idUser && pw === infoUser.pwUser) {
      setLogin(true);
    }
  };

  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value);
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 : <input type="text" onChange={handleLoginInput} />
      </label>
      <br />
      <label>
        비밀번호 : <input type="password" onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}
