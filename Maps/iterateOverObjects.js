/*
Iterate Over Object Properties

Create an object named book with properties title, author, and year. Use a for-in loop to log each property and its value to the console.
*/

let book = {
    title: "Harry Potter", 
    author: "J.K. Rowling",
    year: 2005
}

for (const items in book) {
    console.log(`${items}: ${book[items]}`);
}

