/*
Basic Linear Search: Implement the linearSearch function to find the index of a given number in an array.
*/


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}


const myArray = [5, 2, 1, 7, 8, 9, 10, 15, 25, 20, 22, 14, 17, 16, 19, 32, 6];


console.log(linearSearch(myArray, 100));
