/* Array Method with Arrow Function

Create an array of strings. Use the filter method with an arrow function to create a new array containing only strings with more than three characters. 
Log the new array to the console.
*/

const words = ["hello", "bobbyboy", "elden ring", "masvidal", "aesha", "Abdulaziz", "Igon the destroy", "cat", "dog", "lol"];

const wordFilter = (word) => {
    return word.length > 5;
}

const result = words.filter(wordFilter);

console.log(result);
