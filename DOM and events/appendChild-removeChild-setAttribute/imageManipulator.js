// Create an image element and set its src and alt attributes using setAttribute(), then add it to the page.

const image = document.createElement("img");

image.setAttribute("src", "avatar.png");
image.setAttribute("alt", "avatar image");

document.body.appendChild(image);