const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};
module.exports = assertArraysEqual;



// ACTUAL FUNCTION
const middle = function(array) {
  let res = [];
  const len = array.length;
  if (len % 2 === 0 && len > 2) {
    res.push(array[len / 2 - 1]);
    res.push(array[len / 2]);
  } else if (len % 2 !== 0 && len > 2) {
    res.push(array[Math.floor(len / 2)]);
  }
  return res;
};
module.exports = middle;

console.log(middle([1,2,3,4,5]))
assertArraysEqual(middle([1,2,3,4,5]), [3])