import { generateWeekHTML } from "../views/weeks.js";

export function addWeek2Root(weekArrItem, DOMElement) {
  generateWeekHTML(weekArrItem, DOMElement);
}