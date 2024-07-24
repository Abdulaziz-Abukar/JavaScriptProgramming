/*
Formatting Date

Create a Date object for the current date. Use the Intl.DateTimeFormat object to format the date as "Day Month Year" (e.g., "16 July 2024") and log the result to the console.
*/

let todayDate = new Date();

let formatter = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

console.log(formatter.format(todayDate));