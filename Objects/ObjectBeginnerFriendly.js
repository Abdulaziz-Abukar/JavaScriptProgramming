// const car = {
//     make: "Honda",
//     model: "Civic",
//     year: 2021,
//     isElectric: "False",
//     color: "Red",

//     printDetails: function() {
//         console.log(`The ${this.year} ${this.color} ${this.make} ${this.model}.
//             Electric? : ${this.isElectric}`);
//     }
// }

// car.printDetails()

/*----------------------------------------------------------- */

// const recipe = {
//     name: "Lasagna",
//     ingredients: ["Tomato Sauce", "Cheese", "Lasagna Strips", "Seasoning", "Veggies"],
//     cookingTime: 40,
//     isVegetarian: true,

//     ingredientGrabber: function() {
//         console.log(`second ingredient in the list is: ${this.ingredients[1]}`);
//     }
// }

// recipe.ingredientGrabber();

// let keyName = "cookingTime";

// console.log(recipe[keyName]);

/*----------------------------------------------------------- */

// const book = {
//     title: "Atomic Habits",
//     author: "James Clear",
//     pages: 320
// }

// function describeBook(bookObj) {
//     return `${bookObj.title} by ${bookObj.author} has ${bookObj.pages}.`
// }

// console.log(describeBook(book))

/*----------------------------------------------------------- */

// const pets = {
//     pet1: {
//         name: "Jimmy",
//         type: "Dog",
//         age: 3
//     },
//     pet2: {
//         name: "Stewart",
//         type: "Cat",
//         age: 6
//     },
//     pet3: {
//         name: "Blimey",
//         type: "Snake",
//         age: 2
//     }
// }

// console.log(pets?.pet2?.name)

/*----------------------------------------------------------- */

// const playlist = {
//     title: "Night Vibes",
//     songs: ["Cry me a river", "Don't", "Say It", "Vibes"],
//     isPublic: false
// }

// console.log(`The playlist '${playlist.title}' contains ${playlist.songs.length} songs.`)

/*----------------------------------------------------------- */

// const movies = {
//     movieOne: {
//         title: "Spiderman: No Way Home",
//         genre: "Sci-Fi",
//         rating: 5
//     },
//     movieTwo: {
//         title: "Deadpool & Wolverine",
//         genre: "Sci-Fi",
//         rating: 3
//     },
//     movieThree: {
//         title: "Snow White 2025",
//         genre: "Fantasy",
//         rating: 1
//     },
//     movieFive: {
//         title: "Terrifier 3",
//         genre: "Thriller",
//         rating: 4
//     }
// }

// function getRating(movieObj) {
//     if (movieObj.rating >= 4) {
//         console.log("Must-watch!"); 
//     } else {
//         console.log("Maybe skip this one")
//     }
// }

// getRating(movies.movieFive)

/*----------------------------------------------------------- */

// const product = {
//     name: "TV",
//     price: 650,
//     onSale: true
// }

// function checkForSale(productObj) {
//     if (productObj.onSale) {
//         console.log(`The product ${productObj.name} is now on sale for $${productObj.price}!`)
//     }
// }

// checkForSale(product)