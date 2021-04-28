/// Assertions
const assertArraysEqual = require("./assertArraysEqual")

let moveZeros = function (arr) {
  let newArray = [];
  let zeroArray = [];
  for(let i of arr) {
    if(i === 0) {
      zeroArray.push(i)
    } else {
      newArray.push(i)
    }
  }
  return newArray.concat(zeroArray)
}


//test cases
assertArraysEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1,2,1,1,3,1,0,0,0,0])