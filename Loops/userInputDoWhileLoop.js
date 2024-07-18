var input = "";

do {
    input = parseInt(prompt("Enter a number greater than 10: "), 10);
} while (!Number.isInteger(input) || input <= 10);

console.log("Valid Number.");
