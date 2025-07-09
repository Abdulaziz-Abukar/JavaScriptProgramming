// Merge two sorted arrays into one sorted array
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays and push the smallest one
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Concat any remaining elements (only one of these will execute)
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Recursive merge sort function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: already sorted
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // Sort left half
  const right = mergeSort(arr.slice(mid)); // Sort right half

  return merge(left, right); // Merge sorted halves
}

// Example usage:
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]
