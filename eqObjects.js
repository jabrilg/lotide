const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    } else {
      return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
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
  
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  console.log(eqObjects(ab, ba)); // => true
  
  const abc = { a: "1", b: "2", c: "3" };
  console.log(eqObjects(ab, abc)); // => false
  
  
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  console.log(eqObjects(cd, dc)); // => true
  
  const cd2 = { c: "1", d: ["2", 3, 4] };
  console.log(eqObjects(cd, cd2)); // => false