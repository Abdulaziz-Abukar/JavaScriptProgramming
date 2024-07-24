/*
Basic Error Object

Create a function named throwError that throws a generic Error object with a custom message. 
Call the function inside a try-catch block and log the error's name and message properties to the console.
*/

function throwError() {
    throw new Error("This is an error!")
}

try {
    console.log(throwError())
} catch (error) {
    console.error(error.name + ": " + error.message);
}