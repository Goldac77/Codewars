def how_much_i_love_you(nb_petals):
    # your code
    arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    point = (nb_petals % 6) - 1
    return arr[point]
