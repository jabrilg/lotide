const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    } else {
      return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const countLetters = function(sentence) {
    let obj = {};
    for (const char of sentence) {
      if (char !== " ") {
        if (obj[char]) {
          obj[char] += 1;
        } else {
          obj[char] = 1;
        }
      }
    }
    return obj;
  };
  
  const testObject =countLetters ("lighthouse in the house")
 console.log (testObject.h)
 assertEqual (testObject.h ,4)
  //  console.log(countLetters("lighthouse in the house"));
//  console.log(countLetters("LHL"));