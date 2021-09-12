#include <cmath>
unsigned halving_sum(unsigned n) {
  int x = 0;
  while(n >= 1){
    x += n;
    n = floor(n/2);
  }
  return x;
}
