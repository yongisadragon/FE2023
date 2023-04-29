const memoContainer = document.querySelector(".memoContainer");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
let memoArray = localStorage.getItem("memoArray")
  ? JSON.parse(localStorage.getItem("memoArray"))
  : [];
memoArray = memoArray ?? [];
render();

//reset
function resetMemo() {
  localStorage.clear();
  memoContainer.innerHTML = "";
  memoArray = [];
}

//create
function createMemo(item) {
  const list = document.createElement("li");
  const memoId = document.createElement("p");
  const delMemoBtn = document.createElement("button");
  const h2_title = document.createElement("h2");
  const p_content = document.createElement("p");
  const memoTime = document.createElement("p");

  const time = new Date();
  const year = time.getFullYear();
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const day = String(time.getDate()).padStart(2, "0");

  memoId.className = "a11y-hidden";
  memoTime.className = "memoTime";
  list.className = "memoCard";
  delMemoBtn.className = "delBtn";

  h2_title.setAttribute(
    "style",
    "color:#3e3e3e; border-top: 1px solid #ffb347; margin-top:30px"
  );
  h2_title.textContent = item.memoTitle;
  p_content.setAttribute("style", "color:#3e3e3e;");
  p_content.textContent = item.memoContent;
  memoId.textContent = item.leng + 1;
  delMemoBtn.setAttribute("id", item.leng);
  list.classList.add(item.leng);
  delMemoBtn.setAttribute("style", "");
  delMemoBtn.setAttribute("onclick", "delMemo()");
  memoTime.textContent = `${year}/${month}/${day}`;

  memoContainer.appendChild(list);

  list.appendChild(memoId);
  list.appendChild(delMemoBtn);
  list.appendChild(h2_title);
  list.appendChild(p_content);
  list.appendChild(memoTime);

  const wrraperWH = document.querySelector(".whole-warrper");
  const randomX = parseInt(
    Math.random() * (window.innerWidth - list.offsetWidth)
  );
  const randomY = parseInt(
    Math.random() *
      (window.innerHeight - wrraperWH.offsetHeight - list.offsetHeight)
  );
  list.style.transform = `translate(${
    randomX - wrraperWH.offsetWidth / 3
  }px, ${randomY}px)`;
}

//render
function render() {
  memoContainer.innerHTML = "";

  for (const item of memoArray) {
    createMemo(item);
  }
}

//add info
function addMemo() {
  let memoInfo = {
    memoTitle: title.value,
    memoContent: content.value,
    leng: memoArray.length,
  };
  memoArray.push(memoInfo);
  localStorage.setItem("memoArray", JSON.stringify(memoArray));
  title.value = "";
  content.value = "";
  createMemo(memoInfo);
}

//delete
function delMemo() {
  const idx = memoArray.find((el) => el.leng == event.target.id);
  if (idx) {
    const findIdx = memoArray.findIndex((el) => el.leng === idx.leng);
    memoArray.splice(findIdx, 1);
  }
  localStorage.setItem("memoArray", JSON.stringify(memoArray));

  render();
}

//scroll
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "&darr;";
scrollBtn.setAttribute("class", "scrollDown");
document.body.appendChild(scrollBtn);
const scrollDown = document.querySelector(".scrollDown");
scrollDown.addEventListener("click", function () {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

//sound
const addBtn = document.querySelector(".add");
const resetBtn = document.querySelector(".reset");
addBtn.addEventListener("click", function () {
  let addAudio = new Audio("mp4/postit.wav");
  addAudio.loop = false;
  addAudio.play();
});
resetBtn.addEventListener("click", function () {
  let resetAudio = new Audio("mp4/tear.wav");
  resetAudio.loop = false;
  resetAudio.play();
});

// 추가 예정
// 1. 겹치지 않게 하기
// 2. 드래그 & 픽스 기능
// 3. 다크모드
// 4. 긴 글에은 ellipsis + 모달창으로 읽을 수 있게
