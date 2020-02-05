const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅  Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
    }
  }

const countOnly = function (allItems, itemstToCount){
     const results = {};

for(const item of allItems){
   // console.log(item);
   if (itemstToCount[item]){
   if(results[item]){
       results[item] += 1;
    } else {
        results[item] = 1;
    } 

}

     return results;
}
}
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

 
  
    
 
 
 
 
  console.log(assertEqual(result1["Jason"], 1));
  console.log(assertEqual(result1["Karima"], undefined));
  console.log(assertEqual(result1["Fang"], 2));
  