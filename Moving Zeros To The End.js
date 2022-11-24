function moveZeros(arr) {
  var count = 0
  var a = []
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      count++
    } else {
      a.push(arr[i])
    }
  }
  
  for(let j = 0; j < count; j++){
    a.push(0)
  }
  
  return a
}
