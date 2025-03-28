// Given an array of words, return only the words longer than 5 characters.

const words = [
    "word one", "bobby blobber", "mark cuban", "tall", "dog", "numbers", "cat", "ant"
];

const wordsLongerThan5Chars = words.filter((word) => {
    return word.length > 5;
})

console.log(wordsLongerThan5Chars);
