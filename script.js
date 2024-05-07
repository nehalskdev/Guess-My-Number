'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // when there is no input//
  if (!guess) {
    displayMessage('No number');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!!';
    displayMessage('Correct Number!!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong //
    else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? 'Too high!' : 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = 'you lost the game!';
        displayMessage('you lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }

    // when guess is too high//
  } else if (guess > secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = 'Too High!!';
      displayMessage('Too High!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost!!';
      displayMessage('You lost!!');
      document.querySelector('.score').textContent = 0;
    }

    // when the guess is too low//
  } else if (guess < secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = 'Too low!!';
      displayMessage('Too low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost!!';
      displayMessage('You lost!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'start guessing...';
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
