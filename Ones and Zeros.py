def binary_array_to_number(arr):
  # your code
    a = ""
    for i in arr:
        a += str(i)
    return int(a,2)
