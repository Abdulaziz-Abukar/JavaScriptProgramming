// bubbleUp Function
const bubbleUp = (arr) => {
  let swapping = true;
  swapCounter = 0;

  while (swapping) {
    swapping = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        console.log(`Swapping needed! ${arr[i]} is greater than ${arr[i + 1]}`);
        swap(arr, i, i + 1);
        swapCounter++;
        swapping = true;
      }
    }
  }

  return `\nTotal Comparisons: ${swapCounter} \nfinal array: [${arr}]`;
};

// Swap function
const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

console.log(bubbleUp([5, 4, 3, 2, 1]));
