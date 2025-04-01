// Add a mouseenter event to a <div> that logs "Hovered!" to the console.

const div = document.createElement("div");
const body = document.querySelector("body");

div.style.width = "400px";
div.style.padding = "20px";
div.style.border = "2px solid red";

body.appendChild(div);

div.addEventListener("mouseenter", () => {
    console.log("Hovered!")
})