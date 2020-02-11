const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1); 
  const obj2Keys = Object.keys(object2);
  let result = true;
  if (obj1Keys.length !== obj2Keys.length) { //if ! same object keys length
    result = false;
  } else {
    for (let indexOne in obj1Keys) {
      /*for (let k = 0; k < obj1Keys.length; k++) {
        if (obj1Keys[indexOne] !== obj2Keys[k]) {
          result = false;
        }
      }*/
      if (obj1Keys[indexOne] !== obj2Keys[indexOne]) {
        flag = false;
      }
    }
  } return result;

};
  
  
  const ab = { a: "1", b: "2"};
  const ba = { b: "2", a: "1" };
  assertEqual(eqObjects(ab, ba)); 

module.export = eqObjects;