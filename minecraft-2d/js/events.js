import { renderWorld } from "./world.js";

import { changeItem } from "./tools.js";
import { handleTileInteraction } from "./world.js";

import { resetGame } from "./world.js";

export function setupEvents() {
  const landingPage = document.getElementById("landing");
  const gamePage = document.getElementById("game");
  const startBtn = document.getElementById("startBtn");

  const gettingStartedBtn = document.getElementById("gettingStartedBtn");
  const instructions = document.getElementById("instructions");
  const closeInstructionsBtn = document.getElementById("closeInstructions");

  const homeBtn = document.getElementById("home-button");
  const reloadBtn = document.getElementById("reload-button");

  const axeBtn = document.getElementById("axe-button");
  const shovelBtn = document.getElementById("shovel-button");
  const pickaxeBtn = document.getElementById("pickaxe-button");
  const boxBtn = document.getElementById("box-button");
  const inventory = document.getElementById("inventory");

  const inventorySlots = document.querySelectorAll(".inventory-slot");

  startBtn.addEventListener("click", () => {
    gamePage.classList.remove("hidden");
    landingPage.classList.add("hidden");

    document.body.classList.add("background-color");
    document.body.classList.remove("background-image");
    renderWorld();
  });

  homeBtn.addEventListener("click", () => {
    gamePage.classList.add("hidden");
    landingPage.classList.remove("hidden");

    document.body.classList.remove("background-color");
    document.body.classList.add("background-image");
  });

  reloadBtn.addEventListener("click", () => {
    resetGame();
  });

  gettingStartedBtn.addEventListener("click", () => {
    instructions.classList.remove("hidden");
  });

  closeInstructionsBtn.addEventListener("click", () => {
    instructions.classList.add("hidden");
  });

  // The items event (axe , pickAxe ,shovel  , box)
  axeBtn.addEventListener("click", () => {
    axeBtn.classList.add("selected");
    shovelBtn.classList.remove("selected");
    pickaxeBtn.classList.remove("selected");
    boxBtn.classList.remove("selected");
    changeItem("axe");
  });

  shovelBtn.addEventListener("click", () => {
    axeBtn.classList.remove("selected");
    shovelBtn.classList.add("selected");
    pickaxeBtn.classList.remove("selected");
    boxBtn.classList.remove("selected");
    changeItem("shovel");
  });

  pickaxeBtn.addEventListener("click", () => {
    axeBtn.classList.remove("selected");
    shovelBtn.classList.remove("selected");
    pickaxeBtn.classList.add("selected");
    boxBtn.classList.remove("selected");
    changeItem("pickaxe");
  });

  boxBtn.addEventListener("click", () => {
    changeItem("box");
    inventory.classList.toggle("hidden");
  });

  inventorySlots.forEach((slot) => {
    slot.addEventListener("click", () => {
      const itemType = slot.dataset.item;
      changeItem(itemType);
      document
        .querySelectorAll(".inventory-slot")
        .forEach((s) => s.classList.remove("selected"));

      slot.classList.add("selected");
    });
  });
}

export function onTileClick(row, col, tileType) {
  handleTileInteraction(row, col, tileType);
}
