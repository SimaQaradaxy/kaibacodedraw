"use strict";

const showTimer = true;
// Add list of names here
const namesList = [
  'Hazan.xanm',
  '5hajam',
  'srwsht_ss',
  'shazada_yamur',
  'Anwar.nega',
  'zhirorasul',
  'kale_aziz0',
  'Sham.abas',
  'Dansqa.shopp',
  'Char.ali3',
  'Nila.aziz0',
  'Itzz.casperr',
  'Shawnmjalil',
  'nyaplease',
  'kcha.hawramy.771',
  'rabar__2',
  'k_a_r_m_a.n',
  'bi__work',
  'mada__sweet',
  'Amin12344913',
  'Kaleahmed96',
  'Mhamad.ibrahim1',
  'Aushww123in',
  'Anwar.nega',
  'Am4del',
  '_h_e___v_a',
  'Rwpak._.rahim'
];

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
const stopButton = document.getElementById('stopButton');
const headerOne = document.getElementById('headerNames');
const timerWrapper = document.getElementById('timerWrapper');




startButton.addEventListener('click', function () {
  this.style.display = "none";
  stopButton.style.display = "block";
  intervalHandle = setInterval(function () {
    headerNames.textContent = namesList[i++ % namesList.length];
  }, 100);
  if (showTimer === true) {
    timerWrapper.classList.remove('visible');
  }
});

stopButton.addEventListener('click', function () {
  this.style.display = "none";
  startButton.style.display = "block";
  clearInterval(intervalHandle);
  timer.innerHTML = time;
  if (showTimer === true) {
    timerWrapper.classList.add('visible');
  }
  startTimer();
});


document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    if (x % 2 === 0) {
      startButton.style.display = "none";
      stopButton.style.display = "block";
      intervalHandle = setInterval(function () {
        headerNames.textContent = namesList[i++ % namesList.length];
      }, 50);
      if (showTimer === true) {
        timerWrapper.classList.remove('visible');
      }
    } else {
      startButton.style.display = "block";
      stopButton.style.display = "none";
      clearInterval(intervalHandle);
      timer.innerHTML = time;
      if (showTimer === true) {
        timerWrapper.classList.add('visible');
      }
      startTimer();
    }
    x++;
  }
}

