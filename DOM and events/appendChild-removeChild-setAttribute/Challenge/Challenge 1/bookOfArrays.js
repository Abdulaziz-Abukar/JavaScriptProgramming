/*
Loop through an array of books. For each, create a <div> with:

The book title inside an <h3>

The author inside a <p>

A data-genre attribute set to the genre

Append each book card to a container in the DOM.
*/

const books = [
    { title: "Jujutsu Kaisen", author: "Gege", genre: "Anime" },
    { title: "DragonBall Z", author: "Akira Toriyama", genre: "Anime" },
    { title: "Spiderman", author: "Stan Lee", genre: "Sci-Fi" },
    { title: "Notebook", author: "Aesha", genre: "Romance" }
]

function bookDisplayer(array) {
    for (book of books) {
        const container = document.createElement("div");
        const heading = document.createElement("h3");
        const paragraph = document.createElement("p");
        heading.textContent = book.title;
        paragraph.textContent = book.author;
        container.setAttribute("data-genre-type", book.genre);


        document.body.appendChild(container);
        container.appendChild(heading);
        container.appendChild(paragraph);
    }
}

bookDisplayer(books);