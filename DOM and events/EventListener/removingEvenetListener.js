// Use removeEventListener() to remove a listener after it runs once (hint: use a counter or a named function).



const div = document.createElement("div");
const body = document.querySelector("body");

body.appendChild(div);

div.style.width = "400px";
div.style.padding = "20px";
div.style.border = "2px solid blue";

function eventHovering() {
    console.log("you've entered the event area!");
    count++;
    if (count === 1) {
        div.removeEventListener("mouseenter", eventHovering);
    }
}

let count = 0;
div.addEventListener("mouseenter", eventHovering);

