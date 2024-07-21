/*
Sorting Numbers

Create an array named scores with the values [45, 12, 78, 34, 89]. 
Use the sort method with a comparison function to sort the array in ascending order and log the sorted array to the console.
*/

var scores = [45, 12, 78, 34, 89];

scores.sort((a, b) => a - b);

console.log(scores);