function accum(s) {
	// your code
  var a = s[s.length - 1].toLowerCase()                  //Convert last character to lowercase
  var b = a.toUpperCase() + a.repeat(s.length - 1)       
  var arr = []
  for(var i = 0; i <= s.length - 2; i++){
    var x = s[i].toLowerCase();
    var y = s[i].toUpperCase() + x.repeat(i) + "-"       //current character, in uppercase, plus itself in lowercase(repeated)
    arr.push(y)
  }
  arr.push(b)                                            //add b to the array after the loop to avoid errors
  return arr.join("")                                    //convert array to string
}




//I'm finding it a little add to implement the same idea in python, but I'll try to get it ready ASAP. May not be my original solution....
