def generate_hashtag(s):
    #your code here
    if(len(s) == 0):
        return False
    
    
    else:
        s = s.lower().split()
        z = []
        for i in s:
            i = i.capitalize()
            z.append(i)
        x = "#" + "".join(z)
        if(len(x) > 140):
            return False
        else:
            return x
