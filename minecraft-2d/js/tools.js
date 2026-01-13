import { setCurrentItem } from "./main.js";
import { getCurrentItem } from "./main.js";

export function changeItem(itemName) {
  return setCurrentItem(itemName);
}

export function getItem() {
  return getCurrentItem();
}
