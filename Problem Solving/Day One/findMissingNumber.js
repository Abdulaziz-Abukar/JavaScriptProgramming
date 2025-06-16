/*
🧠 Problem #3: Find the Missing Number
Difficulty: Junior Engineer – Math, Loops, Array Logic

🧩 Prompt:
You're given an array of unique integers from 1 to n (inclusive), but one number is missing.

Write a function called findMissingNumber(arr) that returns the missing number.

✅ Constraints:
The input array is not sorted.

It always contains unique integers from 1 to n, but one number is missing.

The array will have at least one element.

formula: There's a mathematical trick using the formula for the sum of first n natural numbers:
sum = n * (n + 1) / 2
*/

function findMissingNumber(arr) {
  const expectedArrLength = arr.length + 1;

  const expectedSum = (expectedArrLength * (expectedArrLength + 1)) / 2;

  let actualSum = 0;

  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  const missingNum = expectedSum - actualSum;

  return missingNum;
}

console.log(findMissingNumber([2, 3, 1, 5]));
