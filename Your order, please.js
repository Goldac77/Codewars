function order(words){
  // ...
  var regExp = /[0-9]/
  var nums = []
  var arrWords = words.split(" ") //converted the words into an array
  var final = []
  
  //extract numbers from the string
  for(let i = 0; i < words.length; i++) {
    if(regExp.test(words[i])){
      nums.push(words[i])
    }
  }
  
  //sort the numbers in ascending order
  nums.sort((a,b) => a - b)
  
  //arrange the words based on the number position
  for(let j = 0; j < nums.length; j++) {
    for(let k = 0; k < arrWords.length; k++){
      if(arrWords[k].includes(nums[j])){
        final.push(arrWords[k])
      }
    }
  }
  return final.join(" ")
}
