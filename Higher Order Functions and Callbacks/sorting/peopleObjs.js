const people = [
    {name: "Alex", age: 15},
    {name: "Darwin", age: 75},
    {name: "Trisha", age: 21},
    {name: "Stephen", age: 18},
    {name: "Leroy", age: 38},
    {name: "Leonard", age: 30},
    {name: "Peter", age: 10},
]

const sortedPeople = people.sort((a, b) => a.age - b.age)

console.log(sortedPeople);