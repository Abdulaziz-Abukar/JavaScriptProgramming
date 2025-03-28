// Given an array of numbers, return only the even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
})

console.log(evenNumbers)