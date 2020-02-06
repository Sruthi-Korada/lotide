const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};
  
const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
        // if it is an array && the arrays are not equal then return false;
        return false;
      }
      if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
        // if the element is not an array and the items are not equal then return false
        return false;
      }
    } 
    return true;
  };

  const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log(`✅  Assertion passed: ${array1} === ${array2}`);
    } else {
      console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
    }
  };
  

  