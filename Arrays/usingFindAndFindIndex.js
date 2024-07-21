/*
Using find and findIndex

Create an array named numbers with the values [10, 20, 30, 40, 50]. 
Use the find method to find the first number greater than 25 and log it to the console. 
Then, use the findIndex method to find the index of the first number greater than 25 and log it to the console.
*/

var numbers = [10, 20, 30, 40, 50];

var numFind = numbers.find(num => num > 25);

var numIndexFind = numbers.findIndex(num => num > 25);

console.log(numFind);
console.log(numIndexFind);

