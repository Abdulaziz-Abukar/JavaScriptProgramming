/*
Problem #6: Remove Duplicates from an Array
Difficulty: Junior Engineer – Arrays, Sets, Loops

Prompt:
    Write a function removeDuplicates(arr) that returns a new array with all duplicate elements removed, while preserving the original order of elements.

Examples:
js
Copy
Edit
    removeDuplicates([1, 2, 2, 3, 4, 3, 5])
     ➞ [1, 2, 3, 4, 5]

removeDuplicates(["a", "b", "a", "c", "b", "d"])
    ➞ ["a", "b", "c", "d"]

removeDuplicates([1, 1, 1, 1])
    ➞ [1]

Constraints:
    You must preserve the order of first occurrences.

Do not use Set or filter().

Try solving with only basic loops and logic.
*/

const removeDuplicates = (arr) => {
  const finalArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!finalArray.includes(arr[i])) {
      finalArray.push(arr[i]);
    }
  }

  return finalArray;
};

console.log(removeDuplicates(["a", "b", "a", "c", "b", "d"]));
