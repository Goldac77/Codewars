def duplicate_encode(word):
    #your code here
    a = {}
    b = word.lower()
    c = ""
    
    for i in b:
        if(i in a):
            a[i] += 1
        else:
            a[i] = 1
    
    for x in b:
        if(a[x] == 1):
            c += "("
        elif(a[x] > 1):
            c += ")"
    
    return c
