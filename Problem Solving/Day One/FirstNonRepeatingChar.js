/* 
    Problem #1 Find the First Non-Repeating Character
    
    Difficulty: Junior Engineer - Logical Thinking + String Traversal

    Prompt:
            Write a function firstNonRepeatingChar(str) that takes a string and returns the first character that does not repeat anywhere in the string.
                - If all characters repeat or the string is empty, return null.

        example:
            firstNonRepeatingChar('aabbccdde') -> 'e'
            firstNonRepeatingChar('aabcc') -> "b"
            firstNonRepeatingChar('aabb') -> null
            firstNonRepeatingChar('') -> null
*/

const firstNonRepeatingChar = (str) => {
  const countMap = {};

  for (let char of str) {
    countMap[char] = (countMap[char] || 0) + 1;
  }

  for (let char of str) {
    if (countMap[char] === 1) return char;
  }

  return null;
};

console.log(firstNonRepeatingChar("aabbc"));
