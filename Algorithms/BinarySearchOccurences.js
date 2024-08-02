// function binarySearchFirstOccurrence(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     let result = -1; // Initialize result to -1 to indicate not found by default
    
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
        
//         if (arr[mid] === target) {
//             result = mid; // Record the index where the target is found
//             right = mid - 1; // Continue searching in the left half
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return result; // Return the index of the first occurrence or -1 if not found
// }

// // Example usage:
// const sortedArray = [1, 2, 3, 4, 4, 4, 5, 6];
// const target = 4;
// const firstOccurrenceIndex = binarySearchFirstOccurrence(sortedArray, target);
// console.log(`The first occurrence of ${target} is at index: ${firstOccurrenceIndex}`);



function binarySearchLastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1; // Initialize result to -1 to indicate not found by default
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid; // Record the index where the target is found
            left = mid + 1; // Continue searching in the right half
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result; // Return the index of the last occurrence or -1 if not found
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 4, 4, 5, 6];
const target = 4;
const lastOccurrenceIndex = binarySearchLastOccurrence(sortedArray, target);
console.log(`The last occurrence of ${target} is at index: ${lastOccurrenceIndex}`);
