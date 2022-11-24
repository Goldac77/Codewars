def move_zeros(array):
    a = []
    count = 0
    
    for i in array:
        if i == 0:
            count += 1
        else:
            a.append(i)
    
    for i in range(count):
        a.append(0)
    
    return a
