  
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
