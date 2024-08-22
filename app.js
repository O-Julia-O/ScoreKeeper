const p1Button = document.getElementById("p1Button");
const p2Button = document.getElementById("p2Button");
const p1ScoreText = document.getElementById("p1ScoreText");
const p2ScoreText = document.getElementById("p2ScoreText");
const resetButton = document.getElementById("reset")

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener("click", function () {
    /* if the game is not over, than score */
  if (!isGameOver) {
    p1Score += 1;

    /* if score equals than finish the game */
    if (p1Score === winningScore) {
      isGameOver = true;
    }

    p1ScoreText.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
    /* if the game is not over, than score */
  if (!isGameOver) {
    p2Score += 1;

    /* if score equals than finish the game */
    if (p2Score === winningScore) {
      isGameOver = true;
    }

    p2ScoreText.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1ScoreText.textContent = 0;
    p2ScoreText.textContent = 0;
});