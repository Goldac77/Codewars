def array_diff(a, b):
    #your code here
    c = []
    for i in a:
        if i in b:
            continue
        else:
            c.append(i)
    return c
