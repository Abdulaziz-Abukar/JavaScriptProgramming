// Add 3 new <li> elements to a <ul>, then remove the last one.

let listContainer = document.querySelector("#list");

for (let i = 1; i <= 3; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `item: ${i}`;
    listContainer.appendChild(listItem);
}

const listItem = document.querySelectorAll("li");

listContainer.removeChild(listItem[2]);