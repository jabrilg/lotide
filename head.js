const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅ ✅ ✅   Assertion passed: ${actual} === ${expected}");
    } else {
      console.log("🛑 🛑 🛑  Assertion failed: ${actual} !== ${expected}");
    }
  };
    
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual(head([5,6,7]),5);
   
 assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");