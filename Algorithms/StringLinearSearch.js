function stringLinearSearch(arr, target) {
    const itemOccurances = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(target)) {
            itemOccurances.push(i);
        }
    }

    return itemOccurances;
}


const myArray = ["dog", "cat", "mouse", "dog"];

console.log(stringLinearSearch(myArray, "dog"));
