#may delete it as the solution is basically in the kata description
def f(n):
    if(n == 0):
        return 1
    else:
        return n - m(f(n - 1))

def m(n):
    if(n == 0):
        return 0
    else:
        return n - f(m(n - 1))
