// return masked string
function maskify(cc) {  //this is the same idea as with the python method, no changes...
  if (cc.length <= 4){
    return cc;
  } else {
    var ok = cc.split("")
    for(var i = 0; i < ok.length - 4; i++){
      ok[i] = "#";
    }
    return ok.join("")
    }
  }
