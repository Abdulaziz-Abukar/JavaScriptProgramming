// Add a click event listener to a button that changes the background color of the body.

const myButton = document.querySelector("button");
const body = document.querySelector("body");

myButton.textContent = "Click Me!";

myButton.addEventListener("click", () => {
    body.style.background = "red";
})