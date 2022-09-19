var isNewGame;

// Программ эхлэхэд бэлтэх
var activePlayer, scores, roundScore;
var diceDOM = document.querySelector(".dice");

ResetGame();

function ResetGame() {
  isNewGame = true;
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  diceDOM.style.display = "none";

  document.querySelector(".btn-roll").style.visibility = "visible";
  document.querySelector(".btn-hold").style.visibility = "visible";
}

//Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    // Шооны аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Буусан шоонд харгалзах зургийг харуулах
    diceDOM.src = "dice-" + diceNumber + ".png";

    // Шооны зургийг шаргаж ирэх
    diceDOM.style.display = "block";

    // Буусан тоо нь 1-ээс ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ
    if (diceNumber !== 1) {
      // Буусан тоог тоглогчид нэмж өгнө
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      ChangePlayer();
    }
  } else {
    alert("Game is Over!");
  }
});

// Цуглуулсан оноогоо нэмэх
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      isNewGame = false;

      diceDOM.style.display = "none";

      roundScore = 0;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");

      document.getElementById("name-" + activePlayer).textContent = "WINNER!";

      // document.querySelector(".btn-roll").style.visibility = "hidden";
      // document.querySelector(".btn-hold").style.visibility = "hidden";
    } else {
      ChangePlayer();
    }
  } else {
    alert("Game is Over!");
  }
});

function ChangePlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  diceDOM.style.display = "none";
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click", ResetGame);
