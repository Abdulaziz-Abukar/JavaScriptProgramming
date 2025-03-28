// Given an array of numbers, calculate the total sum.

const numbers = [
    1, 5, 2, 3, 6, 8, 9, 10, 12, 15, 126, 17, 20, 26
];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator += currentValue;
});

console.log(sum);