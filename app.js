const p1 = {
  score: 0,
  button: document.getElementById("p1Button"),
  display: document.getElementById("p1ScoreText")
}

const p2 = {
  score: 0,
  button: document.getElementById("p2Button"),
  display: document.getElementById("p2ScoreText")
}

const resetButton = document.getElementById("reset");
const winningScoreSelect = document.getElementById("playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = +winningScoreSelect.value;
let isGameOver = false;

function updateScore(player, opponent) {
    /* if the game is not over, than score */
  if (!isGameOver) {
    player.score += 1;

    /* if score equals than finish the game */
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }

    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
    updateScore(p1, p2);
});

p2.button.addEventListener("click", function () {
   updateScore(p2, p1);
});

winningScoreSelect.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1ScoreText.textContent = 0;
    p2ScoreText.textContent = 0;
    p1ScoreText.classList.remove("has-text-success", "has-text-danger");
    p2ScoreText.classList.remove("has-text-success", "has-text-danger");
    p1Button.disabled = false;
    p2Button.disabled = false;
}