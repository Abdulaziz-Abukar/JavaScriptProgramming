// Create a button that, when clicked, creates a new <li> with a random fruit name and appends it to #fruitList.

const myButton = document.createElement("button");
const listHolder = document.createElement("ul");
const body = document.querySelector("body");

myButton.textContent = "Click for random fruit"

body.appendChild(myButton);
body.appendChild(listHolder)

const fruits = [
    "banana", "grape", "mango", "apple", "orange", "peach", "dragonfruit", "kiwi", "guava", "tomato",
    "pineapple", "cranberry", "blueberry"
];

const min = 0;
const max = fruits.length;

function randomFruit() {
    const listItem = document.createElement("li");
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    const fruit = fruits[randomNum];
    listItem.textContent = fruit;
    listHolder.appendChild(listItem);
}

myButton.addEventListener("click", randomFruit);