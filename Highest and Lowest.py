def high_and_low(numbers):
    # ...
    es = list(map(int, numbers.split()))
    return str(max(es)) + " " + str(min(es))
