
function createButton
const $root = document.querySelector("#root");
const $button = document.createElement("button");
$button.innerText = text;


function render() {

  async function onClickButton() {
    //onClickButton도 비동기도 만들어버렷
    //버튼을 눌렀을때 동작하는거 작성하기
    console.log("주문하기");
    const 서버응답 = await fetch("https://test.api.weniv.co.kr/mall"); //async + await 붙으면 fetch가 끝날때까지 기다릴게~! 뒤에있는것들 다 멈춰 얘 끝날때까지 진행 안해.
    console.log(서버응답); //Response
    //console.log(fetch("https://test.api.weniv.co.kr/mall"));//클릭시 펜딩중인 Promise 객체 반환
    // .then은 그리고, 응답을 객체화 해줘. 콜백함수이므로 return이 내장. 그리고 그 데이터로 ..then..
    //.then((서버응답) => console.log(서버응답)); //Response
    // .then((서버응답) => 서버응답.json())
    // .then((json) => console.log(json)); //줄줄이 객체 소환
    const json = await 서버응답.json();
    console.log(json); //줄줄이 객체
    console.log("유튜브보기");
    console.log("그릇세팅");
  }

  $button.addEventListener("click", onClickButton); //onClickButton()은 리턴없으므로 그렇게 쓰면 아니됑

  $root.append($button);
}

render();

//then이 일어나면, fetch에서 온 결과 데이터를 then()의 괄호안에 함수로 들어감
