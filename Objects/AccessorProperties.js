/*
Create Accessor Properties

Create an object named book with properties title and author. 
Add accessor properties get info that returns a string with the title and author, and set info that updates the title and author. 
Test the accessor properties and log the results to the console.
*/

let book = {
    title: "Harry Potter",
    author: "J.K Rowling",

    get info() {
        console.log(`Title: ${this.title}\nAuthor: ${this.author}`)
    },

    set updateInfo(newInfo) {
        [this.title, this.author] = newInfo.split(", ")
    }
}

book.updateInfo = "JavaScript, the good parts, Douglas Crockford";

book.info;
