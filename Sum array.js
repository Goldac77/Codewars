// Sum Numbers
function sum (numbers) {
    "use strict";
  var result = numbers.reduce(getSum, 0);
  function getSum(a,b) {
    return a + b;
  }
  
  return result
    
};
