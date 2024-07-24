// Math.PI: Returns the value of π (Pi).

console.log(Math.PI);

// Math.abs(x): Returns the aboslute value of a number.

console.log(Math.abs(-5));


// Math.ceil(x): rounds a number up to the nearest integer.

console.log(Math.ceil(4.2));

// Math.floor(x): rounds a number down to the nearest integer.

console.log(Math.floor(4.5));

// Math.round(x): Rounds a number to the nearest integer.

console.log(Math.round(4.5));

// Math.max(x, y, ...): Returns the largest of given numbers.
console.log(Math.max(1, 2, 3));

// Math.min(x, y, ...): Returns a smallest of given numbers.

console.log(Math.min(1, 2, 3));

// Math.sqrt(x): returns the square root of a number.

console.log(Math.sqrt(16));


// PRODUCING RANDOM NUMBERS

// Random number between 0 and 1:

console.log(Math.random());

// Random number between 0 and a Specified value:

let max = 10;

console.log(Math.random() * max);

// Random integer between 0 and a specified value: 

console.log(Math.floor(Math.random() * max));

// Random integer between Two values:

let min = 1;
max = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min );


