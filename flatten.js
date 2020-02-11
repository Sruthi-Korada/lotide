const flatten = function(array) {

  let newArr = [];
  
  for (let i = 0; i < array.length; i ++) {
    if (Array.isArray(array[i])) { //if element is an array
      for (let j = 0; j < array[i].length; j ++) {
        newArr.push(array[i][j]);
      }
    } else {
      newArr.push(array[i]);
    }
  }

  return newArr;

}

module.exports = flatten;