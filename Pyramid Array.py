def pyramid(n):
    # your code here
    x = []
    count = 1
    if(n == 0):
        return []
    else:
        while(count < n+1):
            x.append([1 for i in range(count)])
            count += 1
        return x
            
