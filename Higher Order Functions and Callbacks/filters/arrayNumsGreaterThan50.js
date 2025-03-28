// Given an array of numbers, return numbers greater than 50.

const numbers = [
    60, 4, 6, 2, 10, 600, 454, 23, 67, 57, 80, 50, 76, 80, 1, 14, 25, 27
];

const numbersGreaterThan50 = numbers.filter((num) => {
    return num > 50;
})

console.log(numbersGreaterThan50)