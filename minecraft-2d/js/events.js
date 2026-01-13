import { renderWorld } from "./world.js";

import { changeItem } from "./tools.js";
import { handleTileInteraction } from "./world.js";

export function setupEvents() {
  const landingPage = document.getElementById("landing");
  const gamePage = document.getElementById("game");
  const startBtn = document.getElementById("startBtn");

  const homeBtn = document.getElementById("home-button");
  const reloadBtn = document.getElementById("reload-button");

  const axeBtn = document.getElementById("axe-button");
  const shovelBtn = document.getElementById("shovel-button");
  const pickaxeBtn = document.getElementById("pickaxe-button");
  const swordBtn = document.getElementById("sword-button");
  const boxBtn = document.getElementById("box-button");

  startBtn.addEventListener("click", () => {
    landingPage.remove();
    gamePage.classList.remove("hidden");
    renderWorld();
  });

  homeBtn.addEventListener("click", () => {
    console.log("Home button clicked");
  });

  reloadBtn.addEventListener("click", () => {
    console.log("Reload button clicked");
  });

  // The items event (axe , pickAxe ,shovel , sword , box)
  axeBtn.addEventListener("click", () => {
    changeItem("axe");
  });

  shovelBtn.addEventListener("click", () => {
    changeItem("shovel");
  });

  pickaxeBtn.addEventListener("click", () => {
    changeItem("pickaxe");
  });

  swordBtn.addEventListener("click", () => {
    changeItem("sword");
  });

  boxBtn.addEventListener("click", () => {
    changeItem("box");
  });
}

export function onTileClick(row, col, tileType) {
  handleTileInteraction(row, col, tileType);
}
