"use strict";

// document.querySelector(".message").textContent;
// document.querySelector(".message").textContent = "🥳 Correct Number !";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value;
let Secretnumber = Math.trunc(Math.random() * 100) + 1;

let score = 20;
let highscore = 0;
console.log(20+10);

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when there is  o input
  if (!guess) {
    document.querySelector(".message").textContent =
      "😅 At least enter a number";

    // when player wins
  } else if (guess === Secretnumber) {
    document.querySelector(".message").textContent = "🥳 Correct Number !";
    document.querySelector(".number").textContent = Secretnumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // when guess is greater than number
  } else if (Secretnumber < guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 📈 Number is Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭 You Lost the Game !";
      document.querySelector(".score").textContent = 0;
    }

    // when guess is smaller than number
  } else if (Secretnumber > guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 📉 Number is Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭 You Lost the Game !";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  Secretnumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector(".message").textContent = " Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
