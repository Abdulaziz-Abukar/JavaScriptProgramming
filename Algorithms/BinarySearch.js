/*
Basic Binary Search: Implement the binarySearch function to find the index of a given number in a sorted array.
*/

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;


    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}


const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(binarySearch(myArray, 18));

