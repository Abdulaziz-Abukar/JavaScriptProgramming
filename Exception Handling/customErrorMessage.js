/*
Custom Error Messages

Create a function named validateString that takes a string and throws an Error if the string is empty. 
Use the name property to set the error's name to "EmptyStringError". 
Call the function inside a try-catch block and log the custom error's name and message properties to the console.
*/

function validateString(string) {
    if (string === "") {
        let error = new Error("String cannot be empty.")
        error.name = "EmptyStringError";
        throw error;
    }
    return string;
}


try {
    let result = validateString("hello");
} catch (error) {
    console.log("Error Name: ", error.name)
    console.log("Error Message: ", error.message);
}