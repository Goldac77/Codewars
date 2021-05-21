function smallEnough(a, limit){
  var count = 0;
  for(var i = 0; i < a.length; i++){
    if (a[i] <= limit){
      count++
    }
  }
  if(count == a.length){
    return true
  } else {
    return false
  }
}


//Alternative solution booooi

//Inspired from the top solution in python, and guess what, the same idea (but different code) is the top solution for js

function smallEnough(a, limit){
  var x = Math.max(...a)        //something new: the ...(spread operator) is necessary...
  if (x <= limit){
    return true
  } else {
    return false
  }
}
