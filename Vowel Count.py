def get_count(input_str):  #laziness method haha, was feeling sleepy
    num_vowels = 0
    # your code here
    for x in input_str:
        if x == "a" or x == "e" or x == "i" or x == "o" or x == "u":
            num_vowels += 1
    
    return num_vowels
