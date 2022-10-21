function isInteresting(number, awesomePhrases) {
  // Go to town!
  num = number.toString()
  
  //Function to check digit followed by all zeors
  function allZero(num) {
    var a = []
    const checkZero = x => x == 0
    
    for(let i = 1; i < num.length; i++) {
      a.push(num[i])
    }
    
    return (num[0] > 0 && a.every(checkZero))
  }
  
  //Function to check every digit is the same number
  function allSame(num) {
    var a = []
    for(let i = 0; i < num.length; i++) {
      a.push(num[i])
    }
    
    const checkSame = x => x == a[0]
    
    return a.every(checkSame)
  }
  
  //Function to check for sequential
  function sequential(num) {
    const alpha = "1234567890"
    const beta = "9876543210"
    
    return (alpha.includes(num) || beta.includes(num))
  }
  
  //Function to check if the number is palindrome
  function palindrome(num) {
    var a = num.split("").reverse()
    a = a.join("")
    return (a == num)
  }
  
  //Function to check if the number is found in the array
  function match(num, arr) {
    num = parseInt(num)
    return arr.includes(num)
  }
  
  //Function to check if the number is interesting
  function checkInteresting(num, arr) {
    if(num.length >= 3) {
      if(allZero(num) || allSame(num) || sequential(num) || palindrome(num) || match(num, arr)){
        return true
      } else {
        return false
      }
    }
    return false
  }

  
  function finalCheck(num, arr) {
    if(checkInteresting(num, arr)) {
      return 2
    } else if(checkInteresting((parseInt(num) + 1).toString(), arr) || checkInteresting((parseInt(num) + 2).toString(), arr)) {
      return 1
    } else {
      return 0
    }
  }
  
  return finalCheck(num, awesomePhrases)
}
