def to_jaden_case(string):
    # ...
    string = string.split()
    x = []
    for i in string:
        x.append(i.capitalize())
    return " ".join(x)
