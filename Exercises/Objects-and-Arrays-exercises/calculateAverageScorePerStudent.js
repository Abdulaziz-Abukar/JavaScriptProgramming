/*
You're given an array of student objects. Each student has:

name (string)

scores (array of numbers)

Write a function getTopScorers(students) that returns an array of names for the student(s) with the highest average score.

Expected Output:

getTopScorers(students)
 ➞ ["Zahra", "Fatima"]

*/

const students = [
  { name: "Ali", scores: [90, 80, 85] },
  { name: "Zahra", scores: [95, 85, 90] },
  { name: "Tariq", scores: [70, 75, 72] },
  { name: "Fatima", scores: [95, 85, 90] },
];

function getTopScorers(students) {
  const studentScores = [];

  for (const student of students) {
    let sum = 0;
    let grades = student.scores;

    for (grade of grades) {
      sum += grade;
    }

    const average = Math.floor(sum / grades.length);

    studentScores.push({ name: student.name, average: average });
  }

  const maxAverage = Math.max(
    ...studentScores.map((student) => student.average)
  );
  return studentScores
    .filter((student) => student.average === maxAverage)
    .map((student) => student.name);
}

console.log(getTopScorers(students));
