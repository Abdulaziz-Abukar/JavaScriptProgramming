// Add a new paragraph with the class "warning" and text "This is a warning" to the bottom of a div with ID #alerts.

const container = document.querySelector("#alerts");

const paragraph = document.createElement("p");

paragraph.textContent = "This is a warning";

container.appendChild(paragraph);
