/*
Exercise 6: Array Methods and Object Properties
Create an array named books with objects representing books, each having properties title, author, and year.
Use the map method to create a new array containing only the titles of the books.
Log the new array to the console.
Write a function named findBook that takes an array of books and a title, and returns the book object with the matching title. If the book is not found, throw a TypeError with the message "Book not found".
*/

function findBook(books, title) {
    const book = books.find(book => book.title === title);
    if (!book) {
      throw new TypeError("Book not found");
    }
    return book;
  }
  
  // Example usage
  const books = [
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
    { title: 'You Don\'t Know JS', author: 'Kyle Simpson' },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' }
  ];
  
  try {
    const foundBook = findBook(books, 'Eloquent JavaScript');
    console.log('Book found:', foundBook);
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    const foundBook = findBook(books, 'Nonexistent Book');
    console.log('Book found:', foundBook);
  } catch (error) {
    console.error(error.message); // "Book not found"
  }
  