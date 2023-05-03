const article = document.querySelector(".popup");
const openBtn = document.querySelector(".btn-open");
const closeBtn = article.querySelector(".btn-close");
const dim = document.querySelector(".dim");

// 첫번째 포커스 요소
const firstEl = article.querySelector("a");

function openPopup() {
  article.classList.add("active");
  firstEl.focus();
}

function closePopup() {
  article.classList.remove("active");
}

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
closeBtn.addEventListener("keydown", function (e) {
  // 닫기 버튼에서 tab을 눌렀을 때 밖으로 나가지 않고 첫번째 a로 가도록.
  // 내가 누르고 있는 키 정보를 알려줌
  console.log(e.key);
  // tab만 눌렀을때 (shift+tab일땐 실행되지 않음. 즉 쉬프트가 섞이면 false처리되어 진행x)
  if (!e.shiftKey && e.key === "Tab") {
    // console.log("tab만 누름");
    //연속된 고유의 동작을 중단. 포커스가 바깥으로의 이동도 그것에 포함됨.
    e.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener("keydown", function (e) {
  // 첫번째 a태그에서 shift+tab 같이 눌렀을 때 밖으로 안나가고 닫기버튼으로 가도록.
  if (e.shiftKey && e.key === "Tab") {
    // console.log("shift + tab");
    e.preventDefault();
    closeBtn.focus();
  }
});

dim.addEventListener("click", closePopup);
// Tab -> 다음으로 이동
// Shift+Tab -> 포커스 뒤로 이동
