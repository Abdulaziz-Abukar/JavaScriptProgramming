/* Create and Manipulate an Array

Create an array named numbers with the values [1, 2, 3, 4, 5]. Add the number 6 to the end of the array and the number 0 to the beginning.
Remove the last element and the first element of the array. Log the final array to the console.
*/

const myArray = [1, 2, 3, 4, 5];

myArray.push(6);
myArray.unshift(0);

console.log(myArray);

myArray.pop();

myArray.shift();

console.log(myArray);
