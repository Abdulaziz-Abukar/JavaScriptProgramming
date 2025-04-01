// Create a new <button> element, set its type="button", and append it to the body.
const button = document.createElement("button");

button.setAttribute("type", "button");
button.textContent = "Click Me!";

document.body.appendChild(button);