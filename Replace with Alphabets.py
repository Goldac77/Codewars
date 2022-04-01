def alphabet_position(text):
    a = []
    b = []
    #dictionary for position of alphabets
    x = {
    "a":"1",
    "b":"2",
    "c":"3",
    "d":"4",
    "e":"5",
    "f":"6",
    "g":"7",
    "h":"8",
    "i":"9",
    "j":"10",
    "k":"11",
    "l":"12",
    "m":"13",
    "n":"14",
    "o":"15",
    "p":"16",
    "q":"17",
    "r":"18",
    "s":"19",
    "t":"20",
    "u":"21",
    "v":"22",
    "w":"23",
    "x":"24",
    "y":"25",
    "z":"26"
    }

    #pick only alphabets and switch to lowercase
    for i in text:
        if(i.isalpha()):
            a.append(i.lower())
    
    #switch the alphabets to corresponding numbers 
    for j in a:
        if(j in x):
            b.append(x[j])
    
    return " ".join(b)
