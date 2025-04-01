/*

Topic 4: addEventListener(), removeEvenetListener(), and Event Objects

What they do:
    - addEvenetListener() - Attach a function to run when an event occurs (like click, input, etc.)
    - removeEventListener() - Detach a previously added event listener.
    - Event Object (e) - An object passed to event handlers that contains info about the event.
*/

// ADDEVENTLISTNER()
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", function () {
    alert("Button clicked!");
})

// OR using an arrow function
btn.addEventListener("mouseover", () => {
    console.log("You hovered!");
})


// REMOVEEVENTLISTENER()
function handleClick() {
    console.log("Button clicked!")
}

btn.addEventListener("click", handleClick);

// Later...
btn.removeEventListener("click", handleClick);
// You must use a named function to remove it later.


// EVENT OBJECT
btn.addEventListener("click", function (event) {
    console.log("Event type:", event.type);     // "click"
    console.log("Clicked element", event.target)    // <button>
});