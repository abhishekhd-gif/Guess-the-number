'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  /// If the player entres no numbers
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  }
  /// If the player wins the game
  else if (guess === secertNumber) {
    document.querySelector('.message').textContent = 'correct answer';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secertNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = 'highscore';
    }

    /// if the player guess is too high
  } else if (guess !== secertNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secertNumber ? 'Too High' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game buddy';
      document.querySelector('.score').textContent = 0;
    }
  }

  /// if the player guess is too loww
  //   } else if (guess < secertNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'You lost the game buddy';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  const score = 20;
  secertNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guesssing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '30rem';
});
