/*
🧠 Problem #5: Longest Word in a Sentence
Difficulty: Junior Engineer – String Manipulation, Looping

🧩 Prompt:
Write a function called findLongestWord(sentence) that takes a string sentence and returns the longest word in it.

If there are multiple words with the same length, return the first one.

Example:
    findLongestWord("The quick brown fox jumps over the lazy dog")
     ➞ "jumps"

findLongestWord("I love JavaScript and coding daily")
     ➞ "JavaScript"

findLongestWord("a bb ccc ddd eee fff")
     ➞ "ccc"
*/

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// console.log("The quick brown fox jumps over the lazy dog".split(" "));
