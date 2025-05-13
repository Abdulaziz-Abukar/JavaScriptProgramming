//  Given a sorted array of integers, find two numbers that add up to a target and return their values.

// Solution 1: Naive way O(N^2)
const twoSumNaive = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return `${arr[i]} + ${arr[j]} = ${target}`;
      }
    }
  }
  return [];
};

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(twoSumNaive(sortedArray, 19));

// Solution 2: Two Pointers O(n)

const twoSumPointers = (arr, target) => {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(twoSumPointers(sortedArray, 19));
