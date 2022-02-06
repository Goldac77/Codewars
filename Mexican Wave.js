function wave(str){
  // Code here
  let c = str.split("");
  let inter = [];
  let result = [];
  
  for(let i = 0; i < c.length; i++) {   //iterate the array and ignore whitespaces
    if(c[i] == " ") {
      continue;
    } else {                            //else make a copy of list and change the character 
      let d = c.slice();               //at index to uppercase
      d[i] = d[i].toUpperCase();
      inter.push(d);
    }
  };
  
  for(let j = 0; j < inter.length; j++) {   //finally, iterate inter and convert entries to string
    result.push(inter[j].join(""));
  };
  
  return result;
