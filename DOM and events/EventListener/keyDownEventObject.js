// Use the event object to log which key was pressed in a keydown event.

const input = document.querySelector("#name");

input.addEventListener("keydown", function (keyLogger) {
    console.log(keyLogger.key);
})