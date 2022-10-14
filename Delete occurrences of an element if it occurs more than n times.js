function deleteNth(arr,n){
  // ...
  a = []  //resultant array
  
  //Counts the occurrence of a number in the resultant array
  function counter(num) {
    var count = 0;
    for(let i = 0; i < a.length; i++) {
      if(a[i] === num) {
        count++
      }
    }
    return count
  }
  
  //Push number to a if it occurs less than n times
  for(let j = 0; j < arr.length; j++) {
    if(counter(arr[j]) < n) {
      a.push(arr[j])
    }
  }
  
  return a
  
}
