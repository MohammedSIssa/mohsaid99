export function generateWeekHTML(eventsArray, DOMElement) {
  DOMElement.innerHTML = "";
  let template = "";
  eventsArray.forEach((eventItem) => {
    if (eventItem.event) {
      template += "<section>";
      eventItem.event.forEach((content) => {
        template += `
          <${content["tag"]}>
            ${content["text"]}
          </${content["tag"]}>
        `;
      });
    }
    if (eventItem.images) {
      eventItem.images.forEach((image) => {
        template += `
          <img src="${image["src"]}" class="${image["className"]}">
        `;
      });
    }
    template += "</section>";
  });
  DOMElement.innerHTML = template;
}
