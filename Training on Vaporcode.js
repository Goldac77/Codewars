function vaporcode(string) {
  var n1 = string.toUpperCase();
  n1 = n1.replace(/ /g,"");
  n1 = n1.split("");
  var n2 = n1.join("  ");
  
  return n2;
}
