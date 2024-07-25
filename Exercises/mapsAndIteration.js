/*
Exercise 2: Date Manipulation and Formatting
Create a function named formatDate that takes a Date object and returns a formatted string as "Day Month Year" (e.g., "16 July 2024").
Use the Intl.DateTimeFormat object for formatting.
Create a Date object for your birthday and log the formatted date to the console using the formatDate function.
Exercise 3: Using Maps and Ite
*/

let studentGrades = [
    {name: "Abdulaziz", grade: 100},
    {name: "Aesha", grade: 95},
    {name: "Jimmy", grade: 50},
    {name: "John", grade: 46},
    {name: "Katie", grade: 75},
    {name: "Lily", grade: 86}
];

function printGrades(map) {
    let result;
    for (item of map) {
         result = console.log(`Name: ${item.name} | Grade: ${item.grade}`);
    }

    return result;
}

printGrades(studentGrades);