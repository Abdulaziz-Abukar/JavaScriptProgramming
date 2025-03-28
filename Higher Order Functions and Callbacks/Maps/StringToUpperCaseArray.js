// Given an array of strings, return a new array where each string is in uppercase.

const stringArray = [
    "apples", "bananas", "mangos", "peaches", "pineapples"
];

const stringUppercaseArray = stringArray.map((words) => {
    return words.toUpperCase();
})

console.log(stringUppercaseArray)
