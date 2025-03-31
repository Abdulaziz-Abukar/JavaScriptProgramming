/*

Topic: querySelector() and querySelectorAll()

What are they?

    - querySelector() returns the first element that matches a CSS selector.
    - querySelectorAll() returns all matching elements as a static NodeList (not a live HTMLCollection)

Syntax
    const heading = document.querySelector("h1");
    const firstButton = document.querySelector(".btn");
    const container = document.querySelector("#main-section");

    
    const allButtons = document.querySelectorAll(".btn");

You can use CSS-style selectors like:
    - #id
    - .class
    - tag
    - tag.class
    - [attribute]
*/

const firstBtn = document.querySelector(".btn");
const allBtns = document.querySelectorAll(".btn");

console.log(firstBtn);
console.log(allBtns.length);

/*
Quick Notes
    - querySelector() -> returns a single element or null
    - querySelectorAll() -> returns a NodeList (can loop with for...of or forEach)
*/
