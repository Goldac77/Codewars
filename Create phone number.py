def create_phone_number(n):
    #your code here
    #convert to string
    string = ""
    for i in n:
        string += str(i)
    
    #separate it into three-part string
    first = ""
    second = ""
    third = ""
    
    for x in string[0:3]:
        first += x
    
    for y in string[3:6]:
        second += y
    
    for z in string[6:10]:
        third += z
    
    #join 'em up
    return "(" + first + ") " + second + "-" + third
