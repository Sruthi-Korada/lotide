const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅  Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
    }
  };
  const findKey = (object, callback) => {
      var result = [];
      for (let i in object){
         if( callback(object[i])){
             result = [i];
             return result;
         }
      }
      return undefined;
  };


 console.log( assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) ));// => "noma"


 