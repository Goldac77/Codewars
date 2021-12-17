//This is not the proper way to solve it, I think...
//For some reason, I don't really understand the filter method properly
function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  var newEve = []
  for(var i = 0; i < numbersArray.length; i++) {
    if(numbersArray[i]%2 == 0){
      newEve.push(numbersArray[i]);
    }
  }
  return newEve
};
