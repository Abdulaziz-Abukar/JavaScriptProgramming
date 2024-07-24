
// Current Date and Time
let now = new Date();

console.log(now);


// Specific Date and Time
let specificDate = new Date("2024-07-16T09:00:00");

console.log(specificDate);

// Date components

let dateComponents = new Date(2024, 6, 16, 9, 0, 0); // Note: Month is 0-index (0 = January, 6 = July)

console.log(dateComponents)

// Date methods

console.log(now.getFullYear()); // Output: 2024;

console.log(now.getMonth()); // Output: 6 (0-index, 6 = July);
console.log(now.getDate()); // Output: 16;
console.log(now.getDay()); // Output: 2 (0-index, 2 = Tuesday);
console.log(now.getHours()); // Output: 9;
console.log(now.getMinutes()); // Output: 0;
console.log(now.getSeconds());
console.log(now.getMilliseconds());


// Set Methods
now.setFullYear(2025);
now.setMonth(11);
now.setDate(25);
now.setHours(12);
now.setMinutes(30);
now.setSeconds(45);
now.setMilliseconds(500);

// Formatting Dates

// JS doesn't have a built-in method for formatting dates, but you can use libraries like 'moment.js' or the 'Intl.DateTimeFormat' object for this purpose.

let formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

console.log(formatter.format(now));