def tribonacci(signature, n):
    #your code here
    sig = signature
    a = sig[0]
    b = sig[1]
    c = sig[2]
    count = 0
    new = []
    if n == 0:
        return []
    else:
        while count < n:
            new.append(a)
            d = a + b + c
            a = b
            b = c
            c = d
            count += 1
    return new
