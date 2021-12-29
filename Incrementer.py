def incrementer(nums):
    # your code here
    x = []
    count = 1
    
    #increase value by position
    for i in nums:
        x.append(i + count)
        count += 1
    
    #search for double digit and replace with last digit
    for n, z in enumerate(x):
        if(len(str(z)) > 1):
            x[n] = int(str(z)[-1:])
        else:
            continue
    
    return x
