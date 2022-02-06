def wave(people):
    # Code here
    c = list(people)
    inter = []
    result = []
    
    for i in range(len(c)): #iterate the list and ignore whitespaces
        if(c[i].isspace()):
            continue
        else:               #else make a copy of list and change the character at i index to uppercase
            d = c.copy()
            d[i] = d[i].upper()
            inter.append(d)
    
    for j in inter:         #finally, iterate inter and convert entries to strings
        result.append("".join(j))
    
    return result
