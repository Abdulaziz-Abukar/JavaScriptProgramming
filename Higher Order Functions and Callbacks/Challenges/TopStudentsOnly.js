/*
1. Top Students Only
You have an array of student objects:

const students = [
  { name: "Amina", scores: [80, 95, 90] },
  { name: "Omar", scores: [60, 70, 72] },
  { name: "Layla", scores: [85, 88, 93] },
  { name: "Zaid", scores: [40, 50, 45] }
];

Create a new array of students who have an average score of at least 85.
Each object should look like this:

{ name: "Amina", average: 88.33 }

 */

const students = [
    { name: "Amina", scores: [80, 95, 90] },
    { name: "Omar", scores: [60, 70, 72] },
    { name: "Layla", scores: [85, 88, 93] },
    { name: "Zaid", scores: [40, 50, 45] }
];

const topStudents = students.map((student) => {
    let average = 0;
    let sum = 0;

    student.scores.forEach((score) => {
        sum += score;
    })

    average = sum / student.scores.length;

    return `{ name: "${student.name}", average: ${average.toFixed(2)} }`
})

console.log(topStudents);