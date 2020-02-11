  
const assertArraysEqual = function(arrOne, arrTwo) {
  let resultOne = '', resultTwo = '';
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      resultOne += arrOne[i];
      resultTwo += arrTwo[i];
    }
  } else {
    return (console.log('❌❌❌ ' + arrOne + ' !== ' + arrTwo));
    
  }
  if (resultOne === resultTwo) {
    console.log('✅ ' + arrOne + ' === ' + arrTwo);
  } else {
    console.log('🛑 ' + arrOne + ' !== ' + arrTwo);
  }
};
module.exports = assertArraysEqual;