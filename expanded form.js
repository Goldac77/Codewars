function expandedForm(num) {
  // Your code here
  //convert num to a string
  var str = num.toString();
  var result = []
  for(var i = 0; i < str.length; i++) {
    //checks if the character is greater than zero
    if(str[i] > 0) {
      //puts the character into result and multiples by 10 raised to the power the number of characters after it
      result.push(str[i] * (10 ** (str.length - (i + 1))))
    }
  }
  //return characters in the array in the form 'a + b + c + ...'
  return result.join(' + ')
}
