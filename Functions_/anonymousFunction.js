/* Anonymous Function

Create an array of numbers. Use the map method with an anonymous function to create a new array with each number doubled. Log the new array to the console.
*/

var numbers = [1, 5, 10, 25, 2, 6, 9, 8];

const numFunc = function(numbers) {
    return numbers * 2;
}

const newArray = numbers.map(numFunc);

console.log(newArray);