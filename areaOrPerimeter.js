/*I believe this code is self-explanatory so I left no comments regarding steps
you can make a comment to ask anything that is unclear*/

const areaOrPerimeter = function(l, w){
  var area = l * w;
  var perimeter = (2 * l) + (2 * w);
  
  if(l == w){
    return area;
  } else {
    return perimeter;
  }
}