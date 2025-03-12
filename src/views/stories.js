export function generateStoryHTML(array, DOMElement) {
  DOMElement.innerHTML = "";
  let template = "";
  for (let i = array.length - 1; i >= 0; i--) {
    template += `
    <div class="post" data-id="${array[i]["id"]}" data-type="${array[i]["type"]}" tabindex="0">
      <div class="post-count">#${array[i]["id"]}</div>
      <div class="post-year">${array[i]["year"]}</div>
      <div class="post-duration">${array[i]["duration"]}</div>
      <div class="post-summary">${array[i]["summary"]}</div>
    </div>
    `;
  }
  DOMElement.innerHTML = template;
}
