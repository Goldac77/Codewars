function findUniq(arr) {
  // do magic
  var a = {}
  
  for(let i = 0; i < arr.length; i++){
    if(a[arr[i]]){
      a[arr[i]]++
    } else {
      a[arr[i]] = 1
    }
  }
  
  for(let x in a){
    if(a[x] == 1){
      return parseFloat(x)
    }
  }
}
