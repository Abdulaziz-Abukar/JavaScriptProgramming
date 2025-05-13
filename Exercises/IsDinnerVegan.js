function subLength(str, char) {
    let firstIndex = str.indexOf(char);
    let secondIndex = str.indexOf(char, firstIndex + 1);
  
    // Check if there are exactly 2 occurrences
    if (firstIndex !== -1 && secondIndex !== -1 && str.indexOf(char, secondIndex + 1) === -1) {
      return secondIndex - firstIndex + 1; // inclusive of both characters
    } else {
      return 0;
    }
  }
  console.log(subLength('Saturday', 'a'));   // 6 ('a' at index 1 and 6 → 6 - 1 + 1 = 6)
console.log(subLength('summer', 'm'));     // 2 ('m' at index 2 and 3 → 3 - 2 + 1 = 2)
console.log(subLength('digitize', 'i'));   // 0 (3 times)
console.log(subLength('cheesecake', 'k')); // 0 (once)
