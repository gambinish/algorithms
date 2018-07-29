const assert = require("assert");
const should = require("chai").should();
const expect = require("chai").expect();
const bubbleSort = require("../_bubblesort.js");

// var array2 = [];

// bubbleSort = function() {
//   console.log("test");
// };

describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("bubbleSort", function() {
  // var bubbleSort = require("../_bubblesort.js");
  it("should be a function", function() {
    bubbleSort.should.be.a("function");
  });
  it("should return an array", function() {
    bubbleSort().should.be.a("array");
  });
  it("returned array should be sorted", function() {
    var arr = bubbleSort();
    expect(bubbleSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
  });
});
