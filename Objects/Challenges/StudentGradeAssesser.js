/*
From an array of students with test scores, return an object with each student's name and their average score.
*/

const studentTestScores = [
    {name: "Alex", testScores: [50, 79, 95, 76, 86]},
    {name: "Bobby", testScores: [76, 85, 95, 75, 67]},
    {name: "Alexis", testScores: [87, 66, 60, 70, 71]}
]

function averageGrader(array) {
    const result = [];
    for (const student of array) {
        const sum = student.testScores.reduce((acc, score)=> acc + score, 0);
        const average = sum / student.testScores.length;
        result.push(`Name: ${student.name}, Average: ${average.toFixed(2)}`);
    }

    return result;
}


console.log(averageGrader(studentTestScores));