// Filter an array of strings and for each match, create and display a new <li> inside a <ul>.

const fruits = ["banana", "apple", "peach", "mango", "grape", "pineapple", "kiwi", "dragonfruit", "orange", "tomato"];

const listHolder = document.querySelector("#list");

fruits.filter(fruit => fruit.length >= 6)
.forEach(fruit => {
    const listItem = document.createElement("li");
    listItem.textContent = fruit;
    listHolder.appendChild(listItem);
})