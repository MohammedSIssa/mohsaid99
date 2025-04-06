export function generateGoalsHTML(array, DOMElement) {
  DOMElement.innerHTML = "";
  let template = "<div class='goals'>";
  array.forEach((item) => {
    template += `
    <div class="goal">
      <p>${item["goal"]}</p>
      <div class="loading">
        <div class="progress-value"></div>
        <div class="progress-bar" goal="${item["max"]}" value="${item["current"]}"></div>
      </div>
    </div>
    `;
  });
  DOMElement.innerHTML = template + "</div>";
  drawGoalsBar(document.querySelectorAll(".progress-bar"));
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