/*
Group a list of books by their genre into an object (keys are genre names, values are arrays of books).
ex:
    inventory = {
        scary: ["lorem", "lorem", "lorem"],
        adventure: ["lorem", "lorem", "lorem"],
        funny: ["lorem", "lorem", "lorem"],
        sci-fi: ["lorem", "lorem", "lorem"]
    }
*/

// array of books
const books = [
    { title: "The Shining", genre: "horror" },
    { title: "The Haunting of Hill House", genre: "horror" },
    { title: "Bird Box", genre: "horror" },
    { title: "Treasure Island", genre: "adventure" },
    { title: "The Hobbit", genre: "adventure" },
    { title: "Life of Pi", genre: "adventure" },
    { title: "Good Omens", genre: "funny" },
    { title: "Bossypants", genre: "funny" },
    { title: "The Hitchhiker's Guide to the Galaxy", genre: "funny" },
    { title: "Dune", genre: "scifi" },
    { title: "Neuromancer", genre: "scifi" },
    { title: "Ender's Game", genre: "scifi" }
];

// book manager to sort by genre
const bookManagement = {
    horror: [],
    adventure: [],
    funny: [],
    scifi: []
};


//  function for sorting the books by genre into the object
function bookKeeper(bookArray) {
    for (const items of bookArray) {
        for (key in bookManagement) {
            if (items.genre === key) {
                bookManagement[key].push(items.title);
            }
        }
    }
}

bookKeeper(books);
console.log(bookManagement);