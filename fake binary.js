function fakeBin(x){
  //Split the string into characters and place them into an array
  var xsplit = x.split('');
  //Iterate through the array
  for(var i = 0; i < xsplit.length; i++){
    if(xsplit[i] < '5') {
      xsplit[i] = '0';
    } else {
      xsplit[i] = '1';
    }
  }
  //Join the characters
  return xsplit.join('')
}
