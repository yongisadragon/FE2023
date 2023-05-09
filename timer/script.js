const min = document.getElementById("min");
const sec = document.getElementById("sec");
const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");
let timer;

btnStart.addEventListener("click", startTime);

function startTime() {
  if (min.value === "") min = 0;
  if (sec.value === "") sec = 0;
  timer = setInterval(countTime, 1000);
}

function countTime() {
  if (sec !== 0) {
    sec--;
  } else if (min !== 0) {
    min--;
    sec = 59;
  } else {
    clearTimeout(timer, "타이머 종료");
  }
}
