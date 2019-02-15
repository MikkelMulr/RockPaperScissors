// Author: Michael Mueller
// Date: 01/16/2019

const ROCK_BTN = document.getElementById("btn-rock");
const PAPER_BTN = document.getElementById("btn-paper");
const SCISSOR_BTN = document.getElementById("btn-scissor");
const RESET_BTN = document.getElementById("reset");

const PLAYER_SCORE = document.getElementById("playerScore");
const CPU_SCORE = document.getElementById("cpuScore");
const TIE_SCORE = document.getElementById("tieScore");

const PLAYER_RESULT = document.getElementById("player_result");
const CPU_RESULT = document.getElementById("cpu_result");
const DISPLAY_RESULT = document.getElementById("winner_result");

const ROCK_ICON = document.querySelector('.fa-hand-rock');
const PAPER_ICON = document.querySelector('.fa-hand-paper');
const SCISSOR_ICON = document.querySelector('.fa-hand-scissors');

// Array to store the possible choices
const GAME_RESULTS = ['Player Wins!', 'CPU Wins >:(', 'Tie Game'];

const CHOICES = [
  {
    choice: 'Rock',
    image: './images/rock.jpeg'
  },
  {
    choice: 'Paper',
    image: './images/paper.jpeg'
  },
  {
    choice: 'Scissors',
    image: './images/scissors.jpeg'
  }
];

let playerChoice = '';
let cpuChoice = '';
let winner = '';
let playerScore = 0;
let cpuScore = 0;
let tieScore = 0;
let cpuNum;


window.addEventListener('load', () => {
  PLAYER_RESULT.src = './images/playerOne.jpg';
  CPU_RESULT.src = './images/cpu.jpg';
  DISPLAY_RESULT.textContent = '';
  PLAYER_SCORE.textContent = playerScore;
  CPU_SCORE.textContent = cpuScore;
  TIE_SCORE.textContent = tieScore;
});

function winnerFunc(player, cpu) {

  //PLAYER = ROCK
  if (player == CHOICES[0].choice) {
    // CPU = SCISSORS
    if (cpu == CHOICES[2].choice) {
      winner = GAME_RESULTS[0];
      playerScore++;
      // CPU = ROCK
    } else if (cpu == CHOICES[0].choice) {
      winner = GAME_RESULTS[2];
      tieScore++;
      // CPU = PAPER
    } else if (cpu == CHOICES[1].choice) {
      winner = GAME_RESULTS[1];
      cpuScore++;
    } 
  }

  // PLAYER = PAPER
  if (player == CHOICES[1].choice) {
    // CPU = SCISSORS
    if (cpu == CHOICES[2].choice) {
      winner = GAME_RESULTS[1];
      cpuScore++;
      // CPU = ROCK
    } else if (cpu == CHOICES[0].choice) {
      winner = GAME_RESULTS[0];
      playerScore++;
      // CPU = PAPER
    } else if (cpu == CHOICES[1].choice) {
      winner = GAME_RESULTS[2];
      tieScore++;
    }
  }

  // PLAYER = SCISSORS
  if (player == CHOICES[2].choice) {
    // CPU = SCISSORS
    if (cpu == CHOICES[2].choice) {
      winner = GAME_RESULTS[2];
      tieScore++;
      // CPU = ROCK
    } else if (cpu == CHOICES[0].choice) {
      winner = GAME_RESULTS[1];
      cpuScore++;
      // CPU = PAPER
    } else if (cpu == CHOICES[1].choice) {
      winner = GAME_RESULTS[0];
      playerScore++;
    }
  }
}

function jamFilling(num) {
  cpuChoice = CHOICES[num].choice;
  CPU_RESULT.src = CHOICES[num].image;
}

function cpuRandom() {
  return (Math.floor(Math.random() * 3));
}

function updateDisplay() {
  PLAYER_SCORE.textContent = playerScore;
  CPU_SCORE.textContent = cpuScore;
  TIE_SCORE.textContent = tieScore;
  DISPLAY_RESULT.textContent = winner;

  if (winner == GAME_RESULTS[0]) {
    DISPLAY_RESULT.style.color = 'green';

  } else if (winner == GAME_RESULTS[1]) {
    DISPLAY_RESULT.style.color = 'red';

  } else {
    DISPLAY_RESULT.style.color = 'yellow';
  }
}

// Add event listeners to buttons
ROCK_BTN.addEventListener('click', () => {
  cpuNum = cpuRandom()
  playerChoice = CHOICES[0].choice;
  jamFilling(cpuNum);
  winnerFunc(playerChoice, cpuChoice);
  PLAYER_RESULT.src = CHOICES[0].image;
  updateDisplay();
});

PAPER_BTN.addEventListener('click', () => { 
  cpuNum = cpuRandom();
  playerChoice = CHOICES[1].choice;
  jamFilling(cpuNum);
  winnerFunc(playerChoice, cpuChoice);
  PLAYER_RESULT.src = CHOICES[1].image;
  updateDisplay();
});

SCISSOR_BTN.addEventListener('click', () => {
  cpuNum = cpuRandom();
  playerChoice = CHOICES[2].choice;
  jamFilling(cpuNum);
  winnerFunc(playerChoice, cpuChoice);
  PLAYER_RESULT.src = CHOICES[2].image;
  updateDisplay();
});

RESET_BTN.addEventListener('click', () => {
  playerScore = 0;
  cpuScore = 0;
  tieScore = 0;
  updateDisplay();
  DISPLAY_RESULT.textContent = '';
  CPU_RESULT.textContent = '';
  PLAYER_RESULT.textContent = '';
  
  PLAYER_RESULT.src = './images/playerOne.jpg';
  CPU_RESULT.src = './images/cpu.jpg';
});









