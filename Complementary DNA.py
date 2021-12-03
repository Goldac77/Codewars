def DNA_strand(dna):
    # code here
    a = []
    for i in dna:
        if(i == "A"):
            a.append("T")
        elif(i == "T"):
            a. append("A")
        elif(i == "C"):
            a.append("G")
        elif(i == "G"):
            a.append("C")
    
    return "".join(a)
