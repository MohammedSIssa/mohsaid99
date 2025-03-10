export function generateStoryHTML(array, DOMElement) {
  DOMElement.innerHTML = "";
  let template = "";
  for(let i = array.length - 1; i >= 0; i--){
    template += `
    <div class="post" data-id="${array[i]["id"]}" data-type="${array[i]["type"]}">
      <div class="post-count">#${array[i]["id"]}</div>
      <div class="post-year">${array[i]["year"]}</div>
      <div class="post-duration">${array[i]["duration"]}</div>
      <div class="post-summary">${array[i]["summary"]}</div>
    </div>
    `
  }
  // array.forEach((item) => {
  //   template += `
  //   <div class="post" data-id="${item["id"]}" data-type="${item["type"]}">
  //     <div class="post-count">#${item["id"]}</div>
  //     <div class="post-year">${item["year"]}</div>
  //     <div class="post-duration">${item["duration"]}</div>
  //     <div class="post-summary">${item["summary"]}</div>
  //   </div>
  //   `
  // });
  DOMElement.innerHTML = template;
}

// instead of the forEach loop 
// do a for loop from array.length - 1 to 0
// and use array[i] instead of item
// this will reverse the order of the elements
// and display the most recent first