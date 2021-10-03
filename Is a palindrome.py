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
