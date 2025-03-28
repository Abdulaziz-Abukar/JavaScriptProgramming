// Given an array of objects { name, age }, return an array of just the names.

const person = [
    {name: "Robert", age: 20},
    {name: "Drew", age: 18},
    {name: "Ali", age: 25},
    {name: "Danny", age: 30},
    {name: "Alexis", age: 21},
    {name: "Lucy", age: 27}
];

const personNames = person.map((names) => {
    return names.name;
})

console.log(personNames);


