def feast(beast, dish):
    # your code here
    x = len(beast)
    y = len(dish)
    if((beast[0] == dish[0]) and beast[x-1] == dish[y-1]):
        return True
    else:
        return False
    pass
