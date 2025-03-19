import "./styles/global.css";
import "./styles/large.css";
import "./styles/mobile.css";
import "./styles/scrollbar.css";

import { lazyLoad } from "./controller/lazyLoader";

const weeks = require("./model/weeks.full.json")
const goals = require("./model/goals.json")

const weeksBtn = document.querySelector("#weeksBtn")
const goalsBtn = document.querySelector("#goalsBtn")

import { addWeek2Root } from "./controller/handleWeeks";
import { addStory2Root } from "./controller/handleStories";
import { addGoals2Root } from "./controller/handleGoals";

weeksBtn.addEventListener('click', () => {
  addStory2Root(weeks, document.getElementById("posts"))
  addWeek2Root(weeks[weeks.length - 1]["events"], document.getElementById("root"))
})

goalsBtn.addEventListener('click', () => {
  addStory2Root(goals, document.getElementById("posts"))
  addGoals2Root(goals[goals.length - 1]["goals"], document.getElementById("root"))
})

// On Launch
addStory2Root(weeks, document.getElementById("posts"))
addWeek2Root(weeks[weeks.length - 1]["events"], document.getElementById("root"))
lazyLoad()