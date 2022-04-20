function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  if(n <= 2){
    return n-1
  } else {
    return nthFibo(n-1) + nthFibo(n-2)
  }
}
