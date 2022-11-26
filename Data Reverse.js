function dataReverse(data) {
  // Your code here
  
  //need to split the array into chunks of 8
  var a = data.join("").match(/.{1,8}/g)
  var c = []
  var result = []
  
  if(data.length = 0 || data == null){
    return []
  } else {
    //reverse the order of the chunks and push into c
    for(let i = a.length-1; i >= 0; i--){
      c.push(a[i])
    }
    
    c = c.join("") //join them, but as a string??
    
    //put them into result as integers!!
    for(let i = 0; i < c.length; i++){
      result.push(parseInt(c[i]))
    }
    
    return result
  }
}
