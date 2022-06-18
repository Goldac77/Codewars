def find_it(seq):
    #create a dictionary; ourDict
    ourDict = {}
    
    #create a key for each number, with a value of 1
    #else, add 1 to the value
    for i in seq:
        if(str(i) in ourDict):
            ourDict[str(i)] += 1
        else:
            ourDict[str(i)] = 1
    
    #loop through dictionary and find the odd number
    for x in ourDict:
        if(ourDict[x]%2 != 0):
            return int(x)
