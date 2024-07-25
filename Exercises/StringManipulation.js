/*
Exercise 4: String Manipulation and Template Literals
Create a function named createGreeting that takes a person's name and age as parameters and returns a greeting using a template literal.
Log the greeting to the console.
Use the toUpperCase method to log the greeting in uppercase letters.
*/

let createGreeting = function(name, age) {
    let greeting = `Hello ${name}! You are ${age} years old.`
    let result = greeting.toUpperCase();

    return result;
}

console.log(createGreeting("Jimmy", 20))