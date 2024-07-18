var input = "";

while (input !== "letmein") {
    input = prompt("enter a password: ");
    console.log("Incorrect, Try again.")
}

console.log("Access Granted.")