const words = [
    "Hello", "World", "This", "Is", "a", "JavaScript", "Program"
];

const sentence = words.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue)
})

console.log(sentence);