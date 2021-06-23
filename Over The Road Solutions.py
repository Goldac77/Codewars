#general formula is: opposite = (length x 2) - (address - 1)
#if address == 1, formula is: opposite = length x 2

def over_the_road(address, n):
    a = address
    if a == 1:
        return n * 2
    else:
        return (n * 2) - (a - 1)
