/*
Write a function countWords(text) that takes a string of text and returns an object where:

Each word is a key

The value is the number of times that word appears in the text

Ignore punctuation, and make everything lowercase to avoid case mismatches.

Example:
const text = "Hello hello world! This is a test. A simple test.";

countWords(text)
 ➞ {
   hello: 2,
   world: 1,
   this: 1,
   is: 1,
   a: 2,
   test: 2,
   simple: 1
 }
*/
function countWords(text) {
  const wordCount = {};

  const cleanedText = text
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(" ");

  for (word of cleanedText) {
    if (!wordCount[word]) {
      wordCount[word] = 1;
    } else {
      wordCount[word]++;
    }
  }

  return wordCount;
}
const text = "Hello hello world! This is a test. A simple test.".toLowerCase();
console.log(countWords(text));
