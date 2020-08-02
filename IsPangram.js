function isPangram(string){
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  //expression for spaces
  var regex = /\s/g;
  //converts string to lower case and deletes spaces 
  var lower = string.toLowerCase()
              .replace(regex, "");
  
  /*loops through alpha; if lower doesn't contain a letter from alpha, return false
    else loop to the end of alpha*/
  for(var i = 0; i < alpha.length; i++){
    if(lower.indexOf(alpha[i]) === -1){
      return false;
    }
  }
  return true;
}
