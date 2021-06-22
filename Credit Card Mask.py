# return masked string
def maskify(cc):
    if(len(cc) <= 4): #returns the names input if < 4 characters
        return cc
    else:
        new = list(cc)
        for i in range(0, len(new) - 4): #convert to list and change all(except last 4) characters to #
            new[i] = "#"
        new = "".join(new) #convert list to string with no space
        return new
    pass
