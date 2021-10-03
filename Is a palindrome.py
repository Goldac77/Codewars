#solution 1
def is_palindrome(s):
    a = list(s.lower())
    a.reverse()
    a = "".join(a)
    if(s == a):
        return True
    else:
        return False

#solution 2

def is_palindrome(s):
    s = s.lower()
    b = s[::-1]
    if(b == s):
        return True
    else:
        return False
    
#solution 3 by Alabaster-and(https://github.com/alabaster-and)
def is_palindrome(s):
    s = s.lower()
    news = list(s)
    pals = news[::-1]
    pals = "".join(pals)
    if(s == pals):
        return True
    else:
        return False


