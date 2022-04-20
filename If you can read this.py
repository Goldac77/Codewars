def to_nato(words):
    #your code here
    NATO =  {"A":"Alfa",
     "B":"Bravo",
     "C":"Charlie",
     "D":"Delta",
     "E":"Echo",
     "F":"Foxtrot",
     "G":"Golf",
     "H":"Hotel",
     "I":"India",
     "J":"Juliett",
     "K":"Kilo",
     "L":"Lima",
     "M":"Mike",
     "N":"November",
     "O":"Oscar",
     "P":"Papa",
     "Q":"Quebec",
     "R":"Romeo",
     "S":"Sierra",
     "T":"Tango",
     "U":"Uniform",
     "V":"Victor",
     "W":"Whiskey",
     "X":"Xray",
     "Y":"Yankee",
     "Z":"Zulu" }
    
    #convert the string to uppercase then a list
    a = list(words.upper())
    
    #loop through the list and convert letters according to dict
    for i in range(len(a)):
        if(a[i].isalpha()):
            a[i] = NATO[a[i]]
    
    #remove whitespaces from list
    for j in a:
        if j == " ":
            a.remove(j)
    
    #convert list to string
    return " ".join(a)
