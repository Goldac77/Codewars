function findOdd(A) {
  //happy coding!
  //create an Object; ourObj
  let ourObj = {}
  
  //create a key for each number, with a value of 1
  for(let i = 0; i < A.length; i++){
    let num = A[i.toString()]
    if(ourObj[num] == undefined){
      ourObj[num] = 1
      //if number occurs again, add 1 to the value
    } else {
      ourObj[num]++
    }
  }
  
  
  //loop through object and find the odd number
  for(let x in ourObj){
    if(ourObj[x]%2 != 0){
      return parseInt(x);
    }
  }
  
}
