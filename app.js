// Тоглогчийн ээлжийг хадгалах хувьсагч, First Player = 0, Second Player = 1
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжин дээр цуглуулж байгаа хувьсагч
var roundScore = 0;

// Программ эхлэхэд бэлтэх
var diceDOM = document.querySelector(".dice");

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

diceDOM.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  // Шооны аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDOM.src = "dice-" + diceNumber + ".png";
  diceDOM.style.display = "block";
});
