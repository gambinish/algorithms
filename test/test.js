const assert = require("assert");
const should = require("chai").should();

var chai = require("chai"),
  expect = chai.expect; // preference and tested with expect
chai.use(require("chai-sorted"));

const bubbleSort = require("../_bubblesort.js");

describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("bubbleSort", function(arr) {
  arr = bubbleSort();
  it("should be a function", function() {
    bubbleSort.should.be.a("function");
  });
  it("should return an array", function() {
    bubbleSort().should.be.a("array");
  });
  it("returned array should be sorted", function() {
    expect(arr).to.be.sorted();
  });
});
