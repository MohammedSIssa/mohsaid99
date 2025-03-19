import { generateStoryHTML } from "../views/stories.js";
import { addGoals2Root } from "./handleGoals.js";
import { addWeek2Root } from "./handleWeeks.js";
const weeks = require("../model/weeks.full.json");
const goals = require("../model/goals.json");

export function addStory2Root(storyEvents, DOMElement) {
  generateStoryHTML(storyEvents, DOMElement);
  handleStoryClicks();
}

function handleStoryClicks() {
  const stories = document.querySelectorAll(".post");
  stories.forEach((story) => {
    story.addEventListener("click", () => {
      switch (story.dataset.type) {
        case "weeks":
          addWeek2Root(
            weeks[story.dataset.id - 1]["events"],
            document.getElementById("root")
          );
          break;
        case "goals":
          addGoals2Root(
            goals[story.dataset.id - 1]["goals"],
            document.getElementById("root")
          );
          break;
      }
    });
  });
}
