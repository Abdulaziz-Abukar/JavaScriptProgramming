/*

Topic: innerHTML, textContent, createElement()

What they do
    innerHTML - Gets or sets the HTML content inside an element
    textContent - Gets or sets the text content (no tags) of an element
    createElement() - Creates a new HTML element (e.g., div, li, button) in memory
*/


// INNER HTML (reads/sets HTML content)
const container = document.querySelector("#container");

console.log(container.innerHTML);
// "<p>Hello</p>"

container.innerHTML = "<p>Updated content!</p>";


// TEXTCONTENT (reads/sets just the text)
const msg = document.querySelector("#msg");

console.log(msg.textContent);
// "Hi there!"

msg.textContent = "Just plain text now.";


// createElement() (makes new elements)
const newDiv = document.createElement("div");
newDiv.textContent = "I'm a new div!";

document.body.appendChild(newDiv);

/*
You can:
    - Set properties (.textContent, .classList, .id)
    - Set attributes (.setAttribute)
    - Append it with .appendChild() or append()
*/