/*
Object Method

Create an object named student with properties name and grade. Add a method named getDetails that returns a string with the student's name and grade. 
Call the method and log the result to the console.

*/

let student = {
    name: "Abdulaziz",
    grade: 100,

    getDetails() {
        console.log(`Name: ${this.name}, Grade: ${this.grade}`);
    }
}

student.getDetails();