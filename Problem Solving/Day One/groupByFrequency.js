/*
🧠 Problem #4: Group Elements by Frequency
Difficulty: Junior Engineer – Object Usage, Looping, Sorting

🧩 Prompt:
Write a function called groupByFrequency(arr) that takes an array of elements (numbers or strings) and returns a new array of the same elements, 
sorted by their frequency in descending order.

If two elements have the same frequency, the one that appeared first in the original array should come first.

🧪 Examples:
js
Copy
Edit
groupByFrequency([4, 5, 6, 5, 4, 3]) 
// ➞ [4, 4, 5, 5, 6, 3]

groupByFrequency(['a', 'b', 'a', 'c', 'b', 'a'])
// ➞ ['a', 'a', 'a', 'b', 'b', 'c']

groupByFrequency([1])
// ➞ [1]
*/

const groupByFrequency = (arr) => {
  const frequencyMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    if (!frequencyMap.has(key)) {
      frequencyMap.set(key, { count: 1, firstIndex: i });
    } else {
      frequencyMap.get(key).count++;
    }
  }

  const sorted = [...frequencyMap.entries()].sort((a, b) => {
    const aData = a[1];
    const bData = b[1];

    if (aData.count !== bData.count) {
      return bData.count - aData.count;
    } else {
      return aData.firstIndex - bData.firstIndex;
    }
  });

  const finalResult = [];

  for (let [value, data] of sorted) {
    for (let i = 0; i < data.count; i++) {
      finalResult.push(value);
    }
  }

  return finalResult;
};

console.log(groupByFrequency(["a", "b", "a", "b", "b", "b"]));
