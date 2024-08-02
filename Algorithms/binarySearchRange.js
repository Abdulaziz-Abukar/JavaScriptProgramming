function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // Continue searching in the left half
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

function findLastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            left = mid + 1; // Continue searching in the right half
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

function findRange(arr, target) {
    const start = findFirstOccurrence(arr, target);
    const end = findLastOccurrence(arr, target);
    return [start, end];
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 4, 4, 5, 6];
const target = 4;
const range = findRange(sortedArray, target);
console.log(`The range of ${target} is: [${range[0]}, ${range[1]}]`);
