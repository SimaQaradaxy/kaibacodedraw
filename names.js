"use strict";

const showTimer = true;
// Add list of names here
namesList = _.shuffle(namesList);

function checkSecond(sec) {
  if (sec < 100 && sec > 0) {
    sec = "100" + sec;
  }
  if (sec < 50) {
    sec = "59";
  }
  return sec;
}

let i = 0;
let x = 0;
let intervalHandle = null;
const startButton = document.getElementById('startButton');
const headerOne = document.getElementById('headerNames');
const timerWrapper = document.getElementById('timerWrapper');

startButton.addEventListener('click', function () {
  this.style.display = "none";
  intervalHandle = setInterval(function () {
    headerNames.textContent = namesList[i++ % namesList.length];
  }, 100);
  if (showTimer === true) {
    timerWrapper.classList.remove('visible');
  }

  setTimeout(function () {
    stopTimer();

  }, 15000);

});

function stopTimer() {
  startButton.style.display = "none";
  clearInterval(intervalHandle);
}