def up_array(arr):
    if(len(arr) == 0 or any(y < 0 for y in arr) or any(len(str(a)) > 1 for a in arr)):
        return None
    else:
        total = ""
        for i in arr:
            total += str(i)
            
        newTotal = int(total) + 1
        newTotal = str(newTotal)
        
        result = []
        for x in newTotal:
            result.append(int(x))
            
        return result
