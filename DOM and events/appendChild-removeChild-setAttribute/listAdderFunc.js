// Write a function addItem(text) that creates an <li> with the given text and adds it to #list.

function addItem(text) {

    const listItem = document.createElement("li");
    listItem.textContent = text;

    return listHolder.appendChild(listItem);
}

const listHolder = document.querySelector("#list");

addItem("This was created by a function!")
