// Given an array of numbers, return a new array with each number doubled.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = numbers.map((num) => {
    return num * 2;
})

console.log(newArray);