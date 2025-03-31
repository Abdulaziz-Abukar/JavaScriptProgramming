// Log the textContent of each button inside a container with id #btn-container.

const allBtns = document.querySelectorAll("#btn-container button");

allBtns.forEach(btn => {
    console.log(btn.textContent)
})