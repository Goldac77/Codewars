function incrementer(nums) { 
  // code goes here
  var x = [];
  var count = 1;
  
  //Increase value by position 
  for(var i = 0; i < nums.length; i++) {
    x.push(nums[i] + count);
    count++;
  };
  
  //Search for double digit and replace with last digit
  for(var z = 0; z < x.length; z++) {
    if(x[z].toString().length > 1) {
      var index = x.indexOf(x[z]);
      var y = x[z].toString();
      var j = y[y.length - 1];
      x[index] = parseInt(j);
    };
  };
  
  return x;
}
