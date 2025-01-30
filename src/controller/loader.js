import { handlePostsClicks } from "./loadPosts";

export function load(data) {
  const postUI = document.querySelector(".posts");
  if (data.length === 0) {
    const root = document.getElementById("root");
    postUI.innerHTML = `
    <div class="post">
      لسا ما في اشي :)
    </div>
   `;
    root.innerHTML = "";
  } else {
    postUI.innerHTML = "";
    for (let i = data.length - 1; i >= 0; i--) {
      postUI.innerHTML += `
        <div class="post" data-id="${data[i].id}">
          <div class="post-count">#${data[i].id}</div>
          <div class="post-year">${data[i].year}</div>
          <div class="post-duration">${data[i].durationAr}</div>
          <div class="post-summary">${data[i].overallAr}</div>
        </div>
      `;
    }
    handlePostsClicks(data, document.querySelectorAll(".post"));
  }
}
export function drawGoalsBar(bars) {
  let progressValues = document.querySelectorAll(".progress-value");
  bars.forEach((bar, i) => {
    let barMax = +bar.getAttribute("goal");
    let barValue = +bar.getAttribute("value");
    let barWidth = Math.round((barValue * 100) / barMax);
    progressValues[i].textContent = `${barWidth}%`;
    progressValues[i].style.left =
      barWidth >= 6 ? `${barWidth - 6}%` : `${barWidth}%`;
    bar.style.width = `${barWidth}%`;
  });
}
