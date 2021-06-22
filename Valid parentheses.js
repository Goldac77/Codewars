/*THE CONCEPT THAT HELPED ME SOLVE THIS WAS FROM STACKOVERFLOW
FROM: https://stackoverflow.com/a/27582329/13894757*/

/*IT DOESN'T PASS ALL TEST CASES.
THE CODE FROM: https://github.com/garden-of-remembrance/codewars-js/blob/master/valid-parentheses/solution.js
OFFERS THE SOLUTION THAT PASSES ALL TEST CASES
FEEL FREE TO EDIT THIS TO PASS ALL TEST CASES IF YOU CAN, OR CHANGE IT COMPLETELY*/

function validParentheses(parens){
  var num = 0;
  //loop through the string
  for(var i = 0; i < parens.length; i++){
    //add 1 to num if the character is '('
    if(parens.charAt(i) == '('){
      num++;
      //subtract 1 from the num if the character is ')'
    } else if(parens.charAt(i) == ')'){
      num--;
    };
  };
  //if num is greater than zero it means an extra open bracket is left
  if(num > 0){
    return false;
  }
  //if num is less than zero it means an extra close bracket is left
  if(num < 0){
    return false;
  }
  //if num is null it means both open and close brackets have pairs
  return true;
};
