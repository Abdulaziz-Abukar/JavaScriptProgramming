/*
Delete a Property

Create an object named movie with properties title, director, and releaseYear. Delete the releaseYear property and log the updated object to the console.
*/

let movie = {
    title: "SpiderMan",
    director: "Marvel",
    releaseYear: 2006
};

delete movie.releaseYear;

console.log(movie);