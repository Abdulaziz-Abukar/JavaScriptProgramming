/*
Create an array named letters with the values ["a", "b", "c", "d"]. 
Add the letter "e" to the end and "z" to the beginning of the array. 
Use a for loop to log each letter to the console, a for-of loop to log each letter in uppercase.
and the forEach method to log each letter with its index (e.g., "0: z", "1: a", etc.).
*/

const letters = ["a", "b", "c", "d"];

letters.push("e");
letters.unshift("z");

for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}

console.log("");

for (let letter of letters) {
    console.log(letter.toUpperCase());
}

console.log("");

letters.forEach(function(letter) {
    console.log(`"${letters.indexOf(letter)}: ${letter}"`)
});


