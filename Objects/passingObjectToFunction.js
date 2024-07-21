/*
Pass Object to Function

Create an object named student with properties name and grade.
Write a function named printStudent that takes a student object as a parameter and logs the student's name and grade to the console. 
Call the function with the student object.

*/

let student = {
    name: "Abdulaziz",
    grade: 100
}

function printStudent(student) {
    console.log(`Student Name: ${student.name}\nGrade: ${student.grade}`)
}

printStudent(student);