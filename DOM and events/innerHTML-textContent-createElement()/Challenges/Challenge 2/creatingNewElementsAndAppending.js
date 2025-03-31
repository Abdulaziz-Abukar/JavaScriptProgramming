// Create 5 new <p> elements with text like "Item 1" to "Item 5" using a loop, and add them to a container.

const container = document.querySelector(".container");
for (let i = 1; i <= 5; i++) {
    const paragraph = document.createElement("p");
    paragraph.textContent = "item " + i;
    container.appendChild(paragraph);
}