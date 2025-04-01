/*

Topic appendChild(), removeChild(), setAttribute()

What They Do:
    appendChild() - Adds a node (element) to the end of the parent element
    removeChild() - Removes a specific child node from its parent
    setAttribute() - Adds or updates an attribute (like id, class, src, etc)
*/

// APPENDCHILD()

const para = document.createElement("p");
para.textContent = "This is a new paragraph";

const container = document.querySelector("#container");
container.appendChild(para);    // adds to the DOM


// REMOVECHILD()

const ul = document.querySelector("#list");
const firstItem = ul.querySelector("li");

ul.removeChild(firstItem); // removes the first <li> from the list


// SETATTRIBUTE()

const img = document.createElement("img");

img.setAttribute("src", "avatar.png");
img.setAttribute("alt", "User Avatar");

document.body.appendChild(img);

/*
You can also set:
    - href, type, id, data-* attributes
    disabled, readonly, required, etc.

*/