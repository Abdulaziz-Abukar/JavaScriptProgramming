/*
Exercise 5: Handling Errors with Custom Messages
Create a function named checkPositiveNumber that takes a number as a parameter and throws a RangeError if the number is less than 0.
Use a try-catch block to call the checkPositiveNumber function with different values and log the error’s name and message properties to the console if an error occurs.
*/

function checkPositiveNumber(number) {
    if (number < 0) {
        throw new RangeError("The number must be positive");
    }
    return number;
}

try {
    checkPositiveNumber(-1);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}