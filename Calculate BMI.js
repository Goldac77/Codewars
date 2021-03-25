function bmi(weight, height) {
  var x = (weight/(height**2));
  
  if( x <= 18.5){
    return "Underweight"
  } else if(x <= 25.0){
    return "Normal"
  } else if(x <= 30.0){
    return "Overweight"
  } else if(x > 30){
    return "Obese"
  }
}
