/*
Create an object named employee with properties firstName and lastName. 
Add accessor properties get fullName and set fullName. 
Write a function named changeName that takes an employee object and a newFullName string, and uses the set fullName accessor property to update the employee's name. 
Test the function and log the results to the console.
*/

let employee = {
    firstName: 'John',
    lastName: 'Doe',

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },

    set fullName(newFullName) {
        let names = newFullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    },

}

function changeName(employee, newFullName) {
    employee.fullName = newFullName;
}

console.log(`before chnage: ${employee.fullName}`)

changeName(employee, "Jane Smith");

console.log(`After change: ${employee.fullName}`)

console.log(`First name: ${employee.firstName}`); // Output: Jane
console.log(`Last name: ${employee.lastName}`); // Output: Smith