import "./styles/global.css";
import "./styles/large.css";
import "./styles/mobile.css";
import "./styles/scrollbar.css";

import { load } from "./controller/loader";
import { myData } from "./model/data";
import { drawGoalsBar } from "./controller/loader";

const weeks = document.querySelector("button.load-weeks");
const blogs = document.querySelector("button.load-blogs");
const goals = document.querySelector("button.load-goals");

weeks.addEventListener("click", () => {
  load(myData.weeks);
});
blogs.addEventListener("click", () => {
  load(myData.blogs);
});
goals.addEventListener("click", () => {
  load(myData.goals);
  drawGoalsBar(document.querySelectorAll(".progress-bar"));
});

// load weeks at the start of the app
load(myData.weeks);
