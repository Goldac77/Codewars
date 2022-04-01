def nth_char(words):
    x = []
    j = 0
    for i in words:
        x.append(i[j])
        j += 1
    
    return "".join(x)
