'use strict';

const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const currentScorePlayer0El = document.getElementById('current--0');
const currentScorePlayer1El = document.getElementById('current--1');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

score0EL.textContent = 0;
score1EL.textContent = 0;

dice.classList.add('hidden');

function rollDice() {
  dice.classList.remove('hidden');

  const diceNumber = Math.round(Math.random() * 5 + 1);

  if (diceNumber === 1) {
    switchPlayer(diceNumber);
  } else {
    if (player0El.classList.contains('player--active')) {
      addToScore(0, diceNumber);
    } else {
      addToScore(1, diceNumber);
    }
  }

  dice.setAttribute('src', `dice-${diceNumber}.png`);

  checkForWinner();
}

function addToScore(playerNumber, diceNumber) {
  if (playerNumber === 0) {
    currentScorePlayer0El.textContent =
      Number(currentScorePlayer0El.textContent) + Number(diceNumber);
  } else {
    currentScorePlayer1El.textContent =
      Number(currentScorePlayer1El.textContent) + Number(diceNumber);
  }
}

function switchPlayer(diceNumber = 0) {
  if (player0El.classList.contains('player--active')) {
    diceNumber === 1 && resetScore(currentScorePlayer0El);
    player0El.classList.remove('player--active');
    player1El.classList.add('player--active');
  } else {
    diceNumber === 1 && resetScore(currentScorePlayer1El);
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
  }
}

function resetScore(player) {
  player.textContent = 0;
}

function checkForWinner() {
  if (Number(currentScorePlayer0El.textContent) >= 100) {
    player0El.classList.add('player--winner');
    score0EL.textContent++;
  } else if (Number(currentScorePlayer1El.textContent) >= 100) {
    player1El.classList.add('player--winner');
    score1EL.textContent++;
  } else {
    return;
  }

  if (
    player0El.classList.contains('player--winner') ||
    player1El.classList.contains('player--winner')
  ) {
    rollDiceBtn.setAttribute('disabled', 0);
    holdBtn.setAttribute('disabled', 0);
    dice.classList.add('hidden');
  }
}

function resetGame() {
  if (player1El.classList.contains('player--winner')) {
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
  } else {
    player0El.classList.remove('player--winner');
  }

  rollDiceBtn.removeAttribute('disabled');
  holdBtn.removeAttribute('disabled');
  dice.classList.remove('hidden');

  currentScorePlayer0El.textContent = 0;
  currentScorePlayer1El.textContent = 0;
}

rollDiceBtn.addEventListener('click', rollDice);

let intervalId;
holdBtn.addEventListener('mousedown', e => {
  intervalId = setInterval(() => {
    switchPlayer();
  }, 1000);
});
holdBtn.addEventListener('mouseup', () => {
  clearInterval(intervalId);
});

newGameBtn.addEventListener('click', resetGame);
