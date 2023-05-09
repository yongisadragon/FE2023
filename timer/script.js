let min = document.getElementById("min").value;
let sec = document.getElementById("sec").value;
const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");

btnStart.addEventListener("click", startTime);
btnReset.addEventListener("click", resetTime);

function startTime() {
  if (min === "") min = 0;
  if (sec === "") sec = 0;
  setInterval(countTime, 1000);
}

function countTime() {
  if (sec !== 0) {
    sec--;
  } else if (min !== 0) {
    min--;
    sec = 59;
  }
}

function resetTime() {
  min = "";
  sec = "";
}
