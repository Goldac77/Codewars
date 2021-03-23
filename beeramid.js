// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  var beer = Math.floor(bonus/price); //rounds down the value for the number of beers
  var x = 1;
  var y = 0;
  var count = 0;
  while (y < beer) { //sum the square of consecutive natural numbers until value is greater than "beer"
    x++;
    y += (x**2)
    count++          //counting each loop to represent beeramid level
  }
  return count;
}
