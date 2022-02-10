function createPhoneNumber(numbers){
  //using the same algorithm as I did in Python...
  var string = "";
  for(let i = 0; i < numbers.length; i++){
    string += numbers[i];
  }
  
  var first = string.slice(0, 3);
  var second = string.slice(3, 6);
  var third = string.slice(6, 10);
  
  return "(" + first + ") " + second + "-" + third;
}
