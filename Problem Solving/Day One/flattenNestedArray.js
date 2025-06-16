/*
Problem #2: Flatten a Nested Array
Difficulty: Junior Engineer – Arrays, Recursion (optional)

 Prompt:
        Write a function called flattenArray(arr) that takes an array, which may contain nested arrays, and returns a new flat array with all the values in a single level.

You’re not allowed to use flat() or flatMap(). Write your own logic.  
*/

const array = [1, [2, [3, 4]], 5];

const flattenArray = (arr) => {
  const finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      finalArr.push(arr[i]);
    } else {
      finalArr.push(...flattenArray(arr[i]));
    }
  }
  return finalArr;
};

console.log(flattenArray(array));
