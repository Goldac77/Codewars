def data_reverse(data):
    result = []
    #function to split list into chunks
    def chunks(data):
        for i in range(0, len(data), 8):
            yield data[i:i+8]
    
    #split into chunks and reverse it
    a = list(chunks(data))[::-1]
    
    b = ""
    
    #add the nested list to b
    for i in a:
        for x in i:
            b += str(x)
    
    #convert the string elements into int and append to result
    for i in b:
        result.append(int(i))
    
    return result
    
