def remove_char(s):
    #your code here
    x = list(s)
    x.pop(0)
    x.pop(len(x) - 1)
    final = "".join(x)
    return final
