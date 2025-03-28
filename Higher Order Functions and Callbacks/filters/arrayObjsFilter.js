// Given an array of objects { name, passed: true/false }, return only students who passed.

const students = [
    {name: "Alex", passed: true},
    {name: "Patrick", passed: false},
    {name: "Ulga", passed: true},
    {name: "Steven", passed: true},
    {name: "Alicia", passed: false},
    {name: "Brandon", passed: false},
    {name: "Lexi", passed: true},
];

const passedStudents = students.filter((student) => {
    return student.passed === true;
})

console.log(passedStudents)