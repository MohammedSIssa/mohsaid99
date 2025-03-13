import { generateWeekHTML } from "../views/weeks.js";
import { lazyLoad } from "./lazyLoader.js";

export function addWeek2Root(weekArrItem, DOMElement) {
  generateWeekHTML(weekArrItem, DOMElement);
  lazyLoad()
}