// Create a new <li> element, set its text to "New Item", and add it to a <ul> with ID #list.

const newListItem = document.createElement("li");

newListItem.textContent = "New Item";

const listHolder = document.getElementById("list");

listHolder.appendChild(newListItem);