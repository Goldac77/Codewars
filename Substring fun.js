function nthChar(words){
  var x = [];
  var j = 0;
  
  for(let i=0; i < words.length; i++) {
    x.push(words[i][j]);
    j++;
  }
  
  return x.join("");
}
