#This solution is from N-Ison from codewars
#url: https://www.codewars.com/users/N-lson
#I took this because I'd probably forget or feel lazy to actually solve this in the future

def accum(s):
    str = ""
    for i in range(0, len(s)):
        str += s[i].upper()
        str += s[i].lower()*i
        if i != len(s)-1:
            str += "-"
    return str
  
  
