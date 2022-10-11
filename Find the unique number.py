def find_uniq(arr):
    # your code here
    a = {}
    
    for i in arr:
        if(i in a):
            a[i] += 1
        else:
            a[i] = 1
    
    for x in a:
        if(a[x] == 1):
            return x
