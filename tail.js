const assertEqual = require("./assertEqual");

const tail = function(arr) {
  let arrTail = arr.slice(1);
  return arrTail;
};

module.exports = tail;

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);