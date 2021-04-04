//assertions functions 
const assertArraysEqual = require("./assertArraysEqual")

//  KATA ------------

let uniqueInOrder=function(iterable){
  const array = [];
  let index = 1;
  for(let element of iterable) {
    if (element === iterable[index]) {
      index ++
    } else {
      array.push(element)
      index ++
    }
  }
    
    return array
  
  }

assertArraysEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
assertArraysEqual(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D'])
assertArraysEqual(uniqueInOrder([1,2,2,3,3]) , [1,2,3])