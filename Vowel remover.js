function shortcut (string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let a = string.split("");
  
  for(let i in a){
    for(let j in vowels){
      if(a[i] == vowels[j]){
        a[i] = "";
      }
    }
  }
  return a.join("");
}
