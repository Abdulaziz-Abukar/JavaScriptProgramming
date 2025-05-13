// Create an input field and add a keyup event that logs whatever the user types.

const nameInput = document.querySelector("#name");

function logKey(e) {
    keyLogger += e.key;
    console.log(keyLogger);
}
let keyLogger = "";
nameInput.addEventListener("keyup", logKey);