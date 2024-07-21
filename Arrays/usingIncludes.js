/*
Using includes

Create an array named animals with the values ["cat", "dog", "rabbit", "hamster"].
Use the includes method to check if the array contains the animal "dog" and log the result to the console.
*/

const array = ["cat", "dog", "rabbit", "hamster"];

for (let i = 0; i < array.length; i++) {
    if (array[i].includes("dog")) {
        console.log(array[i]);
    }
}