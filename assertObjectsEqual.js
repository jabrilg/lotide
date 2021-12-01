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
  
  
  const eqObjects = function(object1, object2) {
  
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);
   
    if (keys1.length !== keys2.length) {
      return false;
    }
    
    for (let key of keys1) {
      if (Array.isArray(object1[key])) {
        if (Array.isArray(object2[key])) {
          if (eqArrays(object1[key], object2[key]) === false) {
            return false;
          }
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  };
  
  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected) === true) {
      console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  

  
  ab = { a: '1', b: 2 }; 
   ba = { b: 2, a: '1' };
   console.log(assertObjectsEqual(ab, ba));