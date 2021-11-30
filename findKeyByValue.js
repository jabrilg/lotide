const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    } else {
      return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const findKeyByValue = function(obj, val) {
    for (let key of Object.keys(obj)) {
      if (obj[key] === val){
        return key;
      }
    }
  };
  
  
  
   const bestTVShowsByGenre = { 
     sci_fi: "The Expanse",
     comedy: "Brooklyn Nine-Nine",
     drama:  "The Wire"
   };
  
   assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
   assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
   