/*
Sorting Objects

Create an array named employees with objects representing employees, each having a name and a salary property. 
Sort the array based on the salary property in descending order and log the sorted array to the console.
*/

let employees = [
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 70000 },
    { name: "Charlie", salary: 60000 }
];

employees.sort((a, b) => b.salary - a.salary);

console.log(employees);

