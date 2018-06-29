'use strict'

function binarySearch(input, target) {
  //return input.indexOf(target);  // Remove this line and change to your own algorithm

  const binarySearchRecursive = (input, target, start, end) => {
    const middle = parseInt((start+end)/2);
    return (start > end) ? -1: (target == input[middle]) ? middle : ((target < input[middle]) ? binarySearchRecursive(input, target, start, middle-1): binarySearchRecursive(input, target, middle+1, end));
  }
  
  return binarySearchRecursive(input, target, 0, input.length -1);

}


function generate(testLengthArray){
  //return Array.from({length : testLengthArray.length})
  //  .map(item => ({
  //    input: Array.from({length: item}).map(item => []),
  //    target: 0,
  //    output: -1
  //  })
  //); // Remove this line and change to your own algorithm
  
}

module.exports = generate
