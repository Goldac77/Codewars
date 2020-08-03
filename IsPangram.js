//This method works by comparing the string with each letter from the alphabet 

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



//this method works by using objects
function isPangram(string){
  var obj = {};
  var sum = 0;
  var newString = string.replace(/\s+/g, "").toLowerCase();
  
  //if the letter is found in obj, continue; else add it to obj with a value of 1
  for(var i = 0; i < newString.length; i++){
    if(obj[newString[i]]){
    } else {
      obj[newString[i]] = 1;
    }
  }
  
  //add all the values of obj
  for(var j in obj){
    sum += obj[j]
  }
  
  //checks if all 26 letters are present, return true; else return false
  if(sum == 26){
    return true;
  } else {
    return false;
  }
}

