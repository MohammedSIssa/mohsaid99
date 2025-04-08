export function generateWeekHTML(eventsArray, DOMElement) {
  DOMElement.innerHTML = "";
  let template = "";
  eventsArray.forEach((eventItem) => {
    if (eventItem.event) {
      template += "<section>";
      eventItem.event.forEach((content) => {
        if(content["isVideo"]) {
          template += `
            ${content["html"]}
          `
        }
        else {
          template += `
          <${content["tag"]}>
            ${content["text"]}
          </${content["tag"]}>
        `;
        }
      });
    }
    if (eventItem.images) {
      eventItem.images.forEach((image) => {
        template += `
          <img data-src="${image["src"]}" class="${image["className"] ? image["className"] : "image"} lazy">
        `;
      });
    }
    if(eventItem?.list) {
      template += '<ul>'
      eventItem.list.forEach((listItem) => {
        template += `
          <li>${listItem}</li>
        `
      })
      template += '</ul>'
    }
    template += "</section>";
  });
  template += '<a id="back-to-top" href="#top">الرجوع لأعلى</a>';
  DOMElement.innerHTML = template
}
