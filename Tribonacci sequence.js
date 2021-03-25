function tribonacci(signature,n){
  //your code here
  var sig = signature;
  var a = sig[0];
  var b = sig[1];
  var c = sig[2];
  var result = [];
  var count = 0;
  
  if(n == 0) {
    return []
  } else {
    while (count < n) {
      result.push(a);
      var d = a + b + c;
      a = b
      b = c
      c = d
      count++;
    }
  }
  return result
}
 Correctamundo! You ma
