import { setCurrentItem } from "./main.js";
import { getCurrentItem } from "./main.js";

export function changeItem(itemName) {
  return setCurrentItem(itemName);
}

export function getItem() {
  return getCurrentItem();
}

export function updateToolsUI() {
  const axeBtn = document.getElementById("axe-button");
  const shovelBtn = document.getElementById("shovel-button");
  const pickaxeBtn = document.getElementById("pickaxe-button");
  const boxBtn = document.getElementById("box-button");

  // Clear all selections
  [axeBtn, shovelBtn, pickaxeBtn, boxBtn].forEach((btn) =>
    btn.classList.remove("selected"),
  );
}
