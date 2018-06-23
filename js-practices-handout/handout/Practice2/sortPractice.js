'use strict'

function sort(input) {
  //return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
  function findMin(array){
    var minimum = array[0];
    for(var i = 0; i < array.length; i++){
      if (array[i] < minimum){
        minimum = array[i];
      }
    }
    return minimum;
  };
  function search(input, target) {
  //return  input.indexOf(target);  // Remove this line and change to your own algorithm
  for (var i = 0; i < input.length; i++){
    if (input[i]===target) {
      return i;
    }
  }
  return -1
}
  var sortList = [];
  var count    = input.length;
  for(var i = 0; i < count; i++){
    var currentMin = findMin(input);
    input.splice(search(input,currentMin), 1 );
    sortList.push(currentMin);
  }
  return sortList;
}
module.exports = sort

