function findOutlier(integers){
  var odd = [];
  var even = [];
  
  for(let i=0; i < integers.length; i++){
    if(integers[i]%2 == 0){
      even++;
    } else {
      odd++;
    }
  };
  
  if(even > odd){
    for(let j=0; j < integers.length; j++){
      if(integers[j]%2 != 0){
        return integers[j];
      }
    }
  } else {
    for(let j=0; j < integers.length; j++){
      if(integers[j]%2 == 0){
        return integers[j];
      }
    }
  }
  
}
