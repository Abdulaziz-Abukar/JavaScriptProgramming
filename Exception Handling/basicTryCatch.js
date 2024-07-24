/*
Basic Try-Catch

Create a function named divide that takes two numbers and returns their division. 
Use a try-catch block to handle division by zero. Log the result or error message to the console.
*/

function divideNums(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        throw new Error("Error, cannot divide with 0s")
    }
    return num1 / num2;
}


try {
    let result = divideNums(1, 5);
    console.log(result);
} catch (error) {
    console.error("An error occured:", error.message);
} finally {
    console.log("program is finished");
}