import math
def beeramid(bonus, price):
    # your code
    beer = math.floor(bonus/price)  #rounds down the value for the number of beers
    x = 1
    y = 0
    count = 0
    while (y < beer):             #sum the square of consecutive natural numbers while value is less than "beer"
        x = x + 1
        y += (x**2)
        count = count + 1         #counting each loop to represent beeramid level
    return count
