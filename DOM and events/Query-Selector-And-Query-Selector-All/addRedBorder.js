// Add a red border to all elements with class .box using style.border.

const allBoxes = document.querySelectorAll(".box");

allBoxes.forEach(box => {
    box.style.border = "2px solid red";
})