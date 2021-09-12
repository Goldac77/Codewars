import math

def halving_sum(n): 
    # your code here
    x = 0
    while(n >= 1):
        x += n
        n = math.floor(n/2)
    return x
