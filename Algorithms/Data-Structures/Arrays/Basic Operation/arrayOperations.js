// Array Operations

const arrayPushMethod = [1, 5, 2, 6];

/*
 .push
    - Time complexity: O(1)
    - Inserts element to end of array (right side)
*/

arrayPushMethod.push(25);
console.log(arrayPushMethod); // logs [ 1, 5, 2, 6, 25]

/*
.pop
    - Time complexity: O(1)
    - Removes the last element (right side);
*/
const arrayPopMethod = [1, 2, 3];

arrayPopMethod.pop();
console.log(arrayPopMethod); // logs [1, 2]

/* 
[]
    - Time complexity: O(1)
    - searches for element by index
*/

const arrayIndexSearch = [5, 4, 3];

console.log(arrayIndexSearch[2]); // logs [3];

/* 
.indexOf
    - Time complexity: O(n)
    - Searches for element by value
*/

const arrayValueSearch = [10, 2, 5, 6];

console.log(arrayValueSearch.indexOf(2)); // returns 1

/*
.unshift
    - Time complexity: O(n)
    - Inserts element at the front of the array
*/

const arrayUnshiftMethod = [1, 2, 3, 4];

arrayUnshiftMethod.unshift(2);

console.log(arrayUnshiftMethod); // returns [2, 1, 2, 3, 4]

/*
.shift
    - Time complexity: O(n)
    - Removes element from beginning of array
*/

const arrayShiftMethod = [1, 2, 3, 4];

arrayShiftMethod.shift();
console.log(arrayShiftMethod); // logs [2, 3, 4]

/* 
.splice
    - Time complexity: O(n)
    - insert and remove from anywhere
*/

const arraySpliceMethod = [1, 2, 3, 4];

arraySpliceMethod.splice(0, 2);

console.log(arraySpliceMethod); // logs [3, 4]

/*
.slice
    - Time complexity: O(n)
    - Returns a shallow copy of the array
*/

const arraySliceMethod = [1, 2, 3, 4];

const copy = arraySliceMethod.slice(0, 2);

console.log(copy); // logs [1, 2]
