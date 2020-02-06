const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};
const eqObjects = function(object1, object2) {
    let objectListOne = Object.keys(object1);
    let objectListTwo = Object.keys(object2);
    if (objectListOne.length !== objectListTwo.length) {
      return false;
    } else {
      for (let key of objectListOne) {
        if (object1[key] === object2[key]) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    }
  }
  
  
  const ab = { a: "1", b: "2"};
  const ba = { b: "2", a: "1" };
  console.log(eqObjects(ab, ba)); 

