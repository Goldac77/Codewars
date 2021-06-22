def small_enough(array, limit):
    count = 0                   #beginner solution to a beginner problem
    for i in array:
        if i <= limit:
            count += 1
    
    if len(array) == count:
        return True
    else:
        return False
