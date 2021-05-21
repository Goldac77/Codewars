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
