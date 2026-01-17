import { INITIAL_WORLD } from "./constants.js";
import { getCurrentItem } from "./main.js";
import { TILE_TYPES } from "./constants.js";
import { TOOL_RULES } from "./constants.js";
import { onTileClick } from "./events.js";
import { inventoryState } from "./inventory.js";
import { updateInventoryUI } from "./inventory.js";
import { setCurrentItem } from "./main.js";
import { updateToolsUI } from "./tools.js";

import { INITIAL_WORLD_TEMPLATE } from "./constants.js";

export function renderWorld() {
  // World rendering logic here
  const gameWorld = document.getElementById("gameWorld");
  //   const INITIAL_WORLD = generateInitialWorld();
  gameWorld.innerHTML = ""; // Clear existing world
  for (let row = 0; row < INITIAL_WORLD.length; row++) {
    for (let col = 0; col < INITIAL_WORLD[row].length; col++) {
      const tileType = INITIAL_WORLD[row][col];
      const tileDiv = document.createElement("div");

      tileDiv.classList.add("tile", tileType);

      // Save position & type on the element
      tileDiv.dataset.row = row;
      tileDiv.dataset.col = col;
      tileDiv.dataset.type = tileType;

      // CLICK HANDLER
      tileDiv.addEventListener("click", () => {
        onTileClick(row, col, tileType);
      });

      gameWorld.appendChild(tileDiv);
    }
  }
}

export function handleTileInteraction(row, col, tileType) {
  const currentItem = getCurrentItem();

  console.log("Current Item:", currentItem);
  console.log("Tile Type:", tileType);

  if (
    currentItem === "shovel" ||
    currentItem === "axe" ||
    currentItem === "pickaxe"
  ) {
    if (TOOL_RULES[currentItem].includes(tileType)) {
      console.log(`You used ${currentItem} on ${tileType}`);

      // Add item to inventory
      inventoryState[tileType]++;

      // Update the world state
      INITIAL_WORLD[row][col] = TILE_TYPES.SKY;
      // Re-render the world
      renderWorld();

      // Update inventory UI
      updateInventoryUI();
    }
  } else if (
    currentItem === "grass" ||
    currentItem === "dirt" ||
    currentItem === "stone" ||
    currentItem === "wood" ||
    currentItem === "sand" ||
    currentItem === "diamond" ||
    currentItem === "redstone" ||
    currentItem === "gold" ||
    currentItem === "iron" ||
    currentItem === "coal" ||
    currentItem === "emerald"
  ) {
    // Placing item logic
    if (inventoryState[currentItem] > 0) {
      // Update the world state
      INITIAL_WORLD[row][col] = currentItem;
      // Re-render the world
      renderWorld();

      // Decrease item from inventory
      inventoryState[currentItem]--;

      // Update inventory UI
      updateInventoryUI();
    }
  }
}

export function resetGame() {
  //reset current item
  setCurrentItem("");

  // Reset world
  INITIAL_WORLD.length = 0;
  INITIAL_WORLD_TEMPLATE.forEach((row) => INITIAL_WORLD.push([...row]));

  // Reset inventory
  Object.keys(inventoryState).forEach((item) => {
    inventoryState[item] = 0;
  });

  // UI cleanup
  document
    .querySelectorAll(".inventory-slot")
    .forEach((s) => s.classList.remove("selected"));

  renderWorld();
  updateInventoryUI();
  updateToolsUI();
}
