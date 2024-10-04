"use strict";
document.addEventListener("DOMContentLoaded", () => {
  let number = Math.floor(Math.random() * 20) + 1;
  let score = 20;
  let highscore = 0;

  document.querySelector(".submit").addEventListener("click", () => {
    let guess = document.querySelector(".guess").value;
    if (score > 1) {
      if (isNaN(guess)) {
        document.querySelector(".message").textContent = "Invalid Guess 🚫";
      } else if (Number(guess) > number + 10) {
        document.querySelector(".message").textContent = "Too High 📈";
        score -= 1;
      } else if (Number(guess) > number && guess <= number + 5) {
        document.querySelector(".message").textContent = "High ⬆️";
        score -= 1;
      } else if (Number(guess) < number - 10) {
        document.querySelector(".message").textContent = "Too Low 📉";
        score -= 1;
      } else if (Number(guess) < number && guess >= number - 5) {
        document.querySelector(".message").textContent = "Low ⬇️";
        score -= 1;
      } else if (Number(guess) === number) {
        document.querySelector(".message").textContent = "Correct Answer 🎊🎉";
        document.querySelector(".number").textContent = number;
        document.querySelector("body").style.backgroundColor = "#73EC8B";
        document.querySelector(".number").style.width = "8rem";
        if (score > highscore) {
          highscore = score;
          document.querySelector(
            ".highscore"
          ).textContent = `🚀 High Score : ${highscore} `;
        }
      }
    } else {
      score = 0;
      document.querySelector(".number").textContent = number;
      document.querySelector(".message").textContent = "You Loose !💥";
      document.querySelector("body").style.backgroundColor = "#B8001F";
    }
    document.querySelector(".score").textContent = `💯 Score : ${score}`;
  });

  document.querySelector(".reset").addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".number").style.width = "3rem";
    document.querySelector(".number").textContent = "?";
    number = Math.floor(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start Guessing ...";
    document.querySelector(".score").textContent = "💯 Score : 20";
    document.querySelector(".guess").value = "";
    score = 20;
  });
});
