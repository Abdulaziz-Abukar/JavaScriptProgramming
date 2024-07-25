/*
Exercise 2: Date Manipulation and Formatting

Create a function named formatDate that takes a Date object and returns a formatted string as "Day Month Year" (e.g., "16 July 2024").
Use the Intl.DateTimeFormat object for formatting.
Create a Date object for your birthday and log the formatted date to the console using the formatDate function.

*/

function dateFormatter(date) {
    let formatter = new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return formatter.format(date);
}


let myBday = new Date(2000, 01, 27);
let result = dateFormatter(myBday);
console.log(result);