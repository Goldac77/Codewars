function to_nato(words) {
	// Go code
  const NATO =  {"A":"Alfa",
     "B":"Bravo",
     "C":"Charlie",
     "D":"Delta",
     "E":"Echo",
     "F":"Foxtrot",
     "G":"Golf",
     "H":"Hotel",
     "I":"India",
     "J":"Juliett",
     "K":"Kilo",
     "L":"Lima",
     "M":"Mike",
     "N":"November",
     "O":"Oscar",
     "P":"Papa",
     "Q":"Quebec",
     "R":"Romeo",
     "S":"Sierra",
     "T":"Tango",
     "U":"Uniform",
     "V":"Victor",
     "W":"Whiskey",
     "X":"Xray",
     "Y":"Yankee",
     "Z":"Zulu" };
  
  //convert string to array of uppercase
  var a = words.toUpperCase().split("")
  
  //loop through array and convert characters according to dict
  for(let i = 0; i < a.length; i++){
    if(a[i].match(/[A-Z]/i)){
      a[i] = NATO[a[i]]
    }
  }
  
  //loop through array and remove whitespaces
  for(let j = 0; j < a.length; j++){
    if(a[j] == " "){
      a.splice(j, 1)
    }
  }
  
  //convert array to string
  return a.join(" ")
}
