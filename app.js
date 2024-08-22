const p1Button = document.getElementById("p1Button");
const p2Button = document.getElementById("p2Button");
const p1ScoreText = document.getElementById("p1ScoreText");
const p2ScoreText = document.getElementById("p2ScoreText");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;

p1Button.addEventListener("click", function () {
  if (p1Score !== winningScore) {
    p1Score += 1;
    p1ScoreText.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (p2Score !== winningScore) {
    p2Score += 1;
    p2ScoreText.textContent = p2Score;
  }
});
