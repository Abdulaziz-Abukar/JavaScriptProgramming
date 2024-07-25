/*
Exercise 1: Array Manipulation and Error Handling
Create an array named numbers with values [1, 2, 3, 4, 5].
Write a function named addNumber that takes an array and a number as parameters. The function should add the number to the array if it’s not already present. If the number is already in the array, throw an Error with the message "Number already exists".
Use a try-catch block to call the addNumber function and handle the error if it occurs.
Log the updated array to the console.
*/

let numbers = [1, 2, 3, 4, 5];

function addNumber(numbers, num) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === num) {
            let error = new Error("Number is in Array")
            error.name = "NumInArray";
            throw error;
        }
    }
    numbers.push(num);
    return numbers;
}

try {
    let result = addNumber(numbers, 6)
    console.log(result);
} catch (e) {
    console.log("Error Name: ", e.name);
    console.log("Error Message: ", e.message);
}
