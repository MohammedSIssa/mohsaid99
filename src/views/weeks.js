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
          <img data-src="${image["src"]}" class="${image["className"]} lazy">
        `;
      });
    }
    template += "</section>";
  });
  template += '<a id="back-to-top" href="#posts">الرجوع لأعلى</a>';
  DOMElement.innerHTML = template;
}
