def find_difference(a, b):
    # Your code here!
    v1 = 1
    v2 = 1
    for x in a:
        v1 *= x
    for y in b:
        v2 *= y
    
    return abs(v1 - v2)
