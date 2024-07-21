/*
Passing Arrays to Functions

Create a function named sumArray that takes an array of numbers as an argument and returns the sum of all the numbers in the array. 
Call the function with different arrays and log the results to the console.
*/

function sumArray (arrayNums) {
    let sum = 0;
    for (let i = 0; i < arrayNums.length; i++) {
        sum += arrayNums[i];
    }
    return sum;
}

var nums = [1, 1, 1, 1, 1];

console.log(sumArray(nums));

