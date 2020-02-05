const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;
  
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
  
  module.exports = eqArrays;
  const without = function(source, itemsToRemove) {

    let returnArr = [];
    
    for (let i = 0; i < source.length; i ++) {
      let removeElem = false;
      for (let j = 0; j < itemsToRemove.length; j++) {
        if (source[i] === itemsToRemove[j]) {
          removeElem = true;
        }
      }
      if (removeElem === false) {
        returnArr.push(source[i]);
      }
    }
  
    return returnArr;
  
  }
  
  console.log(without([1, 2, 3], [1])) // => [2, 3]
  console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
  
  
  // Test Cases
  const words = ["hello", "world", "lighthouse"];
  without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);