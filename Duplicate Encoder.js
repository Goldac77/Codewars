function duplicateEncode(word){
    // ...
  var a = {};
  var b = word.toLowerCase();
  var c = "";
  
  for(let i = 0; i < b.length; i++) {
    if(a[b[i]]){
      a[b[i]]++
    } else {
      a[b[i]] = 1
    }
  }
  
  for(let x = 0; x < b.length; x++) {
    if(a[b[x]] == 1){
      c += "("
    } else if(a[b[x]] > 1){
      c += ")"
    }
  }
  
  return c
}
