const landingPage = document.getElementById("landing");
const gamePage = document.getElementById("game");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  landingPage.remove();
  gamePage.classList.remove("hidden");
});
