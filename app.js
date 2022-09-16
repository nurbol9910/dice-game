// Тоглогчийн ээлжийг хадгалах хувьсагч, First Player = 0, Second Player = 1
var activePlayer = 0;

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

//Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
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
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийн ээлжийг сольж өгнө
    // Current оноог 0-лэх, мөн roundScore-г 0-лэнэ
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // Шоог түр алга болгоно
    diceDOM.style.display = "none";

    // Улаан цгийг арилгах
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.toggle("active");

    // Хэрэв идэвхитэй тоглогч 0 байвал түүнийг 1 болгох,
    // үгүй бол 0 болгох
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Улаан цэгийг шилжүүлэх
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.toggle("active");
  }
});
