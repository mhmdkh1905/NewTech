export const inventoryState = {
  dirt: 0,
  stone: 0,
  wood: 0,
  diamond: 0,
  emerald: 0,
  coal: 0,
  iron: 0,
  gold: 0,
  redstone: 0,
  sand: 0,
  grass: 0,
};

export function updateInventoryUI() {
  document.querySelectorAll(".inventory-slot").forEach((slot) => {
    const item = slot.dataset.item;
    const countSpan = slot.querySelector(".count");
    countSpan.textContent = inventoryState[item];
  });
}
