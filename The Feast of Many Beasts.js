function feast(beast, dish) {
//your function here
  var x = beast.length;
  var y = dish.length;
  
  if((beast[0] == dish[0]) && (beast[x-1] == dish[y-1])){
    return true;
  } else {
    return false;
  }
}
