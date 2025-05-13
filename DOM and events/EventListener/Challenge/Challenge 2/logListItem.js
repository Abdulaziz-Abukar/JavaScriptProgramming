// When you click any <li>, log its text using the event target.

const listContainer = document.createElement("ul");
const body = document.querySelector("body");

body.appendChild(listContainer);

const listHolder = document.querySelector("ul");
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item: ${i}`;
    listHolder.appendChild(listItem);
}

listHolder.addEventListener("click", function (event) {
    console.log(event.target);
})