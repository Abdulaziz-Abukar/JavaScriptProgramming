// AR-1) Given an array of integers, find the maximum sum of consecutive elements (subarray).

// Kadene's Algorithm

/*
🧠 Mental Model: Think Like You're Walking Through the Array
Start from the left, keep adding numbers as you go.

If the current sum drops below zero, reset — because a negative running sum is only going to drag down any future additions.

Keep track of the highest sum you've seen so far.

This is basically how Kadane's Algorithm works.
*/

function maxSubArray(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubArray([1, -2, 4, -1, -2, -5, 5, 10]));
