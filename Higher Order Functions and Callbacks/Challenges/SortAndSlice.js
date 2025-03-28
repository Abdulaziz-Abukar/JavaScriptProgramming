const products = [
    { name: "Gamepad", rating: 4.7 },
    { name: "Controller", rating: 3.9 },
    { name: "Keyboard", rating: 4.3 },
    { name: "Monitor", rating: 4.8 },
    { name: "Mouse", rating: 4.2 }  
];

const sortByHighestRating = products.sort((a, b) => b.rating - a.rating).slice(0, 3);
console.log(sortByHighestRating);