/*
Multiple Throws

Create a function named processNumber that takes a number. 
If the number is negative, throw an error with the message "Negative number not allowed". 
If the number is zero, throw an error with the message "Zero is not a valid number". 
Use a try-catch block to call the function and log the result or error message to the console.
*/

function processNumber(number) {
    if (number < 0) {
        throw new Error("Number cannot be negative");
    }
    else if (number === 0) {
        throw new Error("Number cannot be 0");
    }
    return number;
}


try {
    console.log(processNumber(5))
} catch (e) {
    console.error("Error occured:", e.message);
}