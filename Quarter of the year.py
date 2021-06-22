#if you don't understand, review the quarters of the year and the range function
def quarter_of(month):
    # your code here
    if month in range(0, 4):
        return 1
    elif month in range(3, 7):
        return 2
    elif month in range(6, 10):
        return 3
    elif month in range(9, 13):
        return 4
