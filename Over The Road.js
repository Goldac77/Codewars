/* ---- general formula is: opposite = (length x 2) - (address - 1) ----
---- if address == 1, formula is: opposite = length x 2 ---- */
function overTheRoad(address, n){
  var a = address;
  if(a == 1) {
    return n * 2
  } else {
    return (n * 2) - (a - 1)
  };
}
