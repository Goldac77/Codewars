function solve(s){
    //..
  //to count all lower case letters
  var lower = 0;
  //to count all upper case letters
  var upper = 0;
  
  //iterate through s and count all upper and lower case letters
  for(var i = 0; i < s.length; i++){
    if(s[i] == s[i].toUpperCase()){
      upper++;
    } else {
      lower++;
    }
  };
  
  //this converts s to lower or upper case based on the constraints in the kata
  if(lower > upper || lower == upper){
      var final = s.toLowerCase();
    } else if(upper > lower){
      var final = s.toUpperCase();
    }
  return final;
}
