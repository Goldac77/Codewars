def row_weights(array):
    #your code here
    x = 0
    y = 0
    for i in array[::2]:
        x += i
    for j in array[1::2]:
        y += j
    return (x,y)
