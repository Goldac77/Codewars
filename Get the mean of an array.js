function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  var x = 0;
  for(var i = 0; i < marks.length; i++){
    x += marks[i];
  }
  var avg = x / marks.length;
  return Math.floor(avg);
}
