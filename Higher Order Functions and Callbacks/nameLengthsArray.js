// Given an array of names, return an array of name lengths.

const names = [
    "James", "Matthew", "Ali", "Bob", "Mike", "Antonio" 
];

const nameLengths = names.map((name) => {
    return `Name: ${name}, Length: ${name.length}`
})

console.log(nameLengths);