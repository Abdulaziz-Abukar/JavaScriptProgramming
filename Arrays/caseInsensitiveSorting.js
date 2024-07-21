/*
Case-Insensitive Sorting

Create an array named words with the values ["Banana", "apple", "Cherry", "banana"]. 
Use the sort method with a comparison function to sort the array in a case-insensitive manner and log the sorted array to the console
*/

var words = ["Banana", "apple", "Cherry", "banana"];

words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log(words);

