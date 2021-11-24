const eqArrays = function(actual, expected) {
    let check = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        check = false;
      }
    }
  
    if (actual.length !== expected.length) {
      check = false;
    }
    return check;
  };
  
  
  
  const assertArraysEqual = function(actual, expected) {
  
    if (eqArrays(actual, expected) === true) {
      console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  
  };
  
  
  
  const without = function(source, itemsToRemove) {
    let arr = [];
  
    for (let i = 0; i < source.length; i++) {
      
      let check = true;
  
      for (let j = 0; j < itemsToRemove.length; j++) {
        if (source[i] === itemsToRemove[j]) {
          check = false;
        }
      }
  
      if (check === true) {
        arr.push(source[i]);
      }
  
    }
  
    return arr;
  };
  
  console.log(without([1, 2, 3], [1])) // => [2, 3]
  console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
  console.log(without([1, 2, 3], [1,2,3]))  // => [ ]
  console.log(without([1, 2, 3], [1, 2]) )  // => [3]
  console.log(without([1], []) )  // => [1]
  console.log(without([], [1]) )  // => [ ]
  console.log(without([1, 2, 3, 3, 3], [1, 2, 3, 4, 2])) // => []
  console.log(without([1, 2, 3, 5, 6], [3, 6, 5, 10, 12, 34,1]))  // => [2]
  console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])) //=> ["hello", "world"]
  
  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);