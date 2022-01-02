"use strict";

const showTimer = true;

// Add list of names here
let namesList = [
  '_h_e___v_a',
  '5hajam',
  'Am4del',
  'Amin12344913',
  'Anwar.nega',
  'Anwar.nega',
  'Arazw_hsen',
  'Aushww123in',
  'bi__work',
  'Char.ali3',
  'Dansqa.shopp',
  'Hazan.xanm',
  'Itzz.casperr',
  'k_a_r_m_a.n',
  'kale_aziz0',
  'Kaleahmed96',
  'kcha.hawramy.771',
  'mada__sweet',
  'Mhamad.ibrahim1',
  'Nila.aziz0',
  'nyaplease',
  'rabar__2',
  'Rwpak._.rahim',
  'Sham.abas',
  'Shawnmjalil',
  'shazada_yamur',
  'srwsht_ss',
  'zhirorasul',
];

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

  }, 5000);

});

function stopTimer() {
  startButton.style.display = "none";
  clearInterval(intervalHandle);
}