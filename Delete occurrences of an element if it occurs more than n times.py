def delete_nth(order,max_e):
    # code here
    a = {}
    b = []
    
    for i in order:
        if(i in a):
            if(a[i] < max_e):
                a[i] += 1
        else:
            a[i] = 1
    
    #add the number to the list if there are less than max_e occurrences within the same list
    for j in order:
        if((a[j] <= max_e) and (b.count(j) < max_e)):
            b.append(j)
    
    return b
