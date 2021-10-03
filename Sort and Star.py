def two_sort(array):
    new = sorted(array)
    x = new[0]
    y = ""
    for i in x:
        y += i + "***"  #this creates an excess *** at the end
    return y[:-3]       #this removes the excess ***
