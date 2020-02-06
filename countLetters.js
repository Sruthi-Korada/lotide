const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(strng) {
  let result = {};
  for (let count in strng) {
    const i = strng[count];
    if (!result[i]) {
      result[i] = 0;
    }
    result[i]++;
  }
  return result;
 
};
console.log(countLetters("kbffjhhvnkbevfffjhhh"));