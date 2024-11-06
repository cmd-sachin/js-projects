"use strict";
const name1 = document.getElementById("name--0");
const name2 = document.getElementById("name--1");
const score1 = document.querySelector("#score--0");
const score2 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const btn_roll = document.querySelector(".btn--roll");
const btn_new = document.querySelector(".btn--new");
const btn_hold = document.querySelector(".btn--hold");
const current_score1 = document.getElementById("current--0");
const current_score2 = document.getElementById("current--1");
const player_1 = document.querySelector(".player--0");
const player_2 = document.querySelector(".player--1");

let current_player = 1;
let current_score = 0;
let score_1 = 0;
let score_2 = 0;
score1.textContent = 0;
score2.textContent = 0;

btn_roll.addEventListener("click", function () {
  let dice_n = Math.floor(Math.random() * 6) + 1;
  dice.classList.remove("hidden");

  dice.src = "dice-" + dice_n + ".png";

  if (dice_n == 1) {
    btn_roll.disabled = true;
    btn_hold.disabled = true;
    current_score = 0;
    dice.classList.add("hidden");
    if (score_1 > score_2) {
      player_1.classList.add("player--winner");
    } else if (score_1 == score_2) {
      player_1.classList.add("player--winner");
      player_2.classList.add("player--winner");
    } else {
      player_2.classList.add("player--winner");
    }
  } else {
    current_score += dice_n;
    if (current_player == 1) {
      current_score1.textContent = current_score;
    } else {
      current_score2.textContent = current_score;
    }
  }
});

btn_hold.addEventListener("click", () => {
  dice.classList.add("hidden");
  if (current_player == 1) {
    score_1 += current_score;
    score1.textContent = score_1;
    current_player = 2;
    current_score1.textContent = 0;
    player_1.classList.remove("player--active");
    player_2.classList.add("player--active");
  } else {
    score_2 += current_score;
    score2.textContent = score_2;
    current_score2.textContent = 0;
    current_player = 1;

    player_2.classList.remove("player--active");
    player_1.classList.add("player--active");
  }
  current_score = 0;
  btn_roll.disabled = false;
  btn_roll.textContent = "🎲 Roll dice";
});
