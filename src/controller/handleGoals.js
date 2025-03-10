import { generateGoalsHTML } from "../views/goals.js";

export function addGoals2Root(goalsArrayItem, DOMElement) {
  generateGoalsHTML(goalsArrayItem, DOMElement);
}