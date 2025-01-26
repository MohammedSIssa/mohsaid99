const root = document.getElementById("root");
import { drawGoalsBar } from "./loader";

export function handlePostsClicks(data, posts) {
  // display latest post first
  let latestPostIdx = data.length - 1;
  root.innerHTML = data[latestPostIdx]["content-ar"];

  // Create click event on each post
  posts.forEach((post) => {
    let postId = post.getAttribute("data-id");
    post.addEventListener("click", () => {
      root.innerHTML = data[postId - 1]["content-ar"];
      drawGoalsBar(document.querySelectorAll(".progress-bar"));
    });
  });
}
