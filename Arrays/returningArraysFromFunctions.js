/*
Returning Arrays from Functions

Create a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers. 
Call the function with different arrays and log the results to the console.

*/

var filterEvenNumbers = (arrayNums) => {
    let evenNums = [];
    for (let i = 0; i < arrayNums.length; i++) {
        if (arrayNums[i] % 2 === 0) {
            evenNums.push(arrayNums[i]);
        }
    }
    return evenNums;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(filterEvenNumbers(numbers))