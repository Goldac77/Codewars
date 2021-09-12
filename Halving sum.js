function halvingSum(n) {
  x = 0;
  while(n >= 1){
    x += n;
    n = Math.floor(n/2);
  }
  return x;
}
