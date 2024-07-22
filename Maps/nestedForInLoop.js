/*
Nested For-In Loop

Create an object named library with properties section and books, where books is an array of book objects with properties title and author. Use a nested for-in loop to log each section and the books within it.
*/

const library = {
    fiction: [
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: '1984', author: 'George Orwell' }
    ],
    nonFiction: [
        { title: 'Sapiens', author: 'Yuval Noah Harari' },
        { title: 'Educated', author: 'Tara Westover' }
    ],
    science: [
        { title: 'A Brief History of Time', author: 'Stephen Hawking' },
        { title: 'The Selfish Gene', author: 'Richard Dawkins' }
    ]
};

// Nested for-in loop to log each section and the books within it
for (const section in library) {
    console.log(`Section: ${section}`);
    for (const bookIndex in library[section]) {
        const book = library[section][bookIndex];
        console.log(`  Title: ${book.title}, Author: ${book.author}`);
    }
}


