/*
Descending Order

Create an array named ages with the values [32, 21, 45, 12, 33].
Use the sort method with a comparison function to sort the array in descending order and log the sorted array to the console.
*/

var ages = [32, 21, 45, 12, 33];

ages.sort((a, b) => b - a);

console.log(ages);