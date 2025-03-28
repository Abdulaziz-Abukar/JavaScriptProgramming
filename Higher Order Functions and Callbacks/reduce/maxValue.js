// Given an array of numbers, find the maximum value.

const numbers = [
    1, 5, 2, 7, 19, 12, 23, 66, 0, 125, 45, 86, 96
];

const maxNumber = numbers.reduce((maxValue, currentValue) => {
    if (maxValue < currentValue) {
        maxValue = currentValue;
    }

    return maxValue;
})

console.log(maxNumber);