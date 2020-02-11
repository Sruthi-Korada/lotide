const assert = require('chai').assert;
 const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"])
describe("#tail", () => {
    it("returns ['Lighthouse', 'Labs']", () => {
      assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });
  })