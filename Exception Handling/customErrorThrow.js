/*
Custom Error with Throw

Create a function named validateEmail that takes an email string and checks if it contains "@" and ".". 
If not, throw an error with the message "Invalid email format". Use a try-catch block to call the function and log the result or error message to the console.
*/

function validateEmail(email) {
    if (!email.includes("@") || !email.includes(".")) {
        throw new Error("Must include '@' and '.'")
    }
    return "Login successful!"
}


try {
    console.log(validateEmail("aziz23@live.ca"))
} catch (error) {
    console.error("error has occured:", error.message);
}
