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
  
  const letterPositions = function(sentence) {
    const obj = {};
    let index = 0;
    for (let char of sentence) {
      if (char !== " ") {
        if (obj[char]) {
          obj[char].push(index);
        } else {
          obj[char] = [index];
        }
      }
      index += 1;
    }
    return obj;
  };
  
  // console.log(letterPositions("lighthouse in the house"));
  // console.log(assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]));
   console.log(letterPositions("lighthouse in the house"));
   console.log(assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]));