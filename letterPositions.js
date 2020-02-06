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

  const assertArraysEqual = function(arry1, arry2) {
    if (eqArrays(arry1, arry2)) {
      console.log(`✅  Assertion passed: ${arry1} === ${arry2}`);
    } else {
      console.log(`🛑  Assertion failed: ${arry1} !== ${arry2}`);
    }
  };
  const letterPositions = function(sentence) {
    const results = {};
    for(let i in sentence){
        if (results[sentence[i]]){
            results[sentence[i]].push(i)
        }
        else {
            results[sentence[i]] = [i];
        }
    }
    return results;
  };


  console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);