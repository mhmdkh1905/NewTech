import { INITIAL_WORLD } from "./constants.js";
import { getCurrentItem } from "./main.js";
import { TILE_TYPES } from "./constants.js";
import { TOOL_RULES } from "./constants.js";
import { TOOLS } from "./constants.js";
import { onTileClick } from "./events.js";
// import { TILE_TYPES } from "./constants.js";

// function generateInitialWorld(rows = 14, cols = 28) {
//   const world = [];

//   for (let row = 0; row < rows; row++) {
//     const currentRow = [];

//     for (let col = 0; col < cols; col++) {
//       currentRow.push(getTileByHeight(row, rows));
//     }

//     world.push(currentRow);
//   }

//   return world;
// }

// function getTileByHeight(row, totalRows) {
//   const skyLimit = totalRows * 0.2;
//   const cloudLimit = totalRows * 0.25;
//   const treeLimit = totalRows * 0.35;
//   const grassLimit = totalRows * 0.4;
//   const dirtLimit = totalRows * 0.6;

//   if (row < skyLimit) return TILE_TYPES.SKY;
//   if (row < cloudLimit) return TILE_TYPES.CLOUD;
//   if (row < treeLimit) return randomTreeOrSky();
//   if (row === Math.floor(grassLimit)) return TILE_TYPES.GRASS;
//   if (row < dirtLimit) return TILE_TYPES.DIRT;

//   return randomOre();
// }

// function randomTreeOrSky() {
//   return Math.random() < 0.2 ? TILE_TYPES.TREE : TILE_TYPES.SKY;
// }

// function randomOre() {
//   const rand = Math.random();

//   if (rand < 0.02) return TILE_TYPES.DIAMOND;
//   if (rand < 0.05) return TILE_TYPES.GOLD;
//   if (rand < 0.1) return TILE_TYPES.IRON;
//   if (rand < 0.2) return TILE_TYPES.COAL;

//   return TILE_TYPES.ROCK;
// }

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
  if (TOOL_RULES[currentItem].includes(tileType)) {
    console.log(`You used ${currentItem} on ${tileType}`);
    // Update the world state
    INITIAL_WORLD[row][col] = TILE_TYPES.SKY;
    // Re-render the world
    renderWorld();
  }
}
