def is_interesting(number, awesome_phrases):
    num = str(number)
    
    def allZero(num):
        check = True
        a = list(num[i] for i in range(1, len(num)))
        for i in a:
            if(i != "0"):
                check = False
                break
        
        return check
    
    def allSame(num):
        check = True
        a = list(num)
        for i in a:
            if(i != a[0]):
                check = False
                break
        
        return check
    
    def sequential(num):
        alpha = "1234567890"
        beta = "9876543210"
        return (num in alpha or num in beta)
    
    def palindrome(num):
        return num[0:] == num[::-1]
    
    def match(num, arr):
        return int(num) in arr
    
    def checkInteresting(num, arr):
        if(len(num) >= 3):
            if(allZero(num) or allSame(num) or sequential(num) or palindrome(num) or match(num, arr)):
                return True
            else:
                return False
        else:
            return False
    
    def finalCheck(num, arr):
        if(checkInteresting(num, arr)):
            return 2
        elif (checkInteresting(str(int(num) + 1), arr) or checkInteresting(str(int(num) + 2), arr)):
            return 1
        else:
            return 0
    
    return finalCheck(num, awesome_phrases)
            
