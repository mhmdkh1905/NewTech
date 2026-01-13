import { setupEvents } from "./events.js";

setupEvents();

let item = "";

export function getCurrentItem() {
  return item;
}

export function setCurrentItem(newItem) {
  item = newItem;
}
