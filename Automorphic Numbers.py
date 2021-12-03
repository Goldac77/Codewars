def automorphic(n):
    #your code here
    a = len(str(n))
    sqr = str(n**2)
    pos = sqr[-a:]
    
    if(n == int(pos)):
        return "Automorphic"
    else:
        return "Not!!"
