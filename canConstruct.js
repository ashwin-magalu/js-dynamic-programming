/*
    PROBLEM: Write a function "canConstruct(target, wordBank)" that accept a target string and an array of strings. Returned a boolean indicating whether or not the target can be constructed by concatenating elements of the wordBank array.
*/

const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];

  for (let word of wordBank) {
    const targetSplited = target.split(word);

    if (targetSplited.length === 1) continue;
    for (part of targetSplited) {
      if (targetSplited.join("") === "") return true;
      if (part === "") continue;
      return canConstruct(part, wordBank, memo);
    }
  }

  memo[target] = false;
  return false;
};

console.log(canConstruct("banana", ["ba", "pa", "ca", "na"])); // True
console.log(canConstruct("", ["ba", "pa", "ca", "na"])); // false
console.log(canConstruct("abcdef", ["ab", "abcdefgh", "c", "def"])); // True
console.log(canConstruct("potato", ["pot", "ta", "to"])); // False
console.log(canConstruct("skateboard", ["skat", "te", "bor", "ard"])); // False
console.log(canConstruct("skateboard", ["skat", "te", "e", "bo", "ard"])); // True
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee",
    "eeeeeeee",
  ])
); // false
