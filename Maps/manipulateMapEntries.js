/*
Manipulate Map Entries

Create a Map named employeeMap with keys name, position, and salary. Update the salary value, check if the position key exists, and log the updated map.
*/

let employeeMap = [
    {name: 'John', position: 'Manager', salary: 100000},
    {name: 'Jane', position: 'Developer', salary: 80000},
    {name: 'Bob', position: 'Developer', salary: 90000},
    {name: 'Alice', position: 'Manager', salary: 120000},
    {name: 'Eve', position: 'Developer', salary: 70000},
    
];

employeeMap[0].salary = 100;

console.log(employeeMap[0].salary);

for (const person in employeeMap) {
    console.log(`name: ${employeeMap[person].name}, Position: ${employeeMap[person].position}, Salary: ${employeeMap[person].salary}`)
}

