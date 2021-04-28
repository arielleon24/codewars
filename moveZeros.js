/// Assertions
const assertEqual = require("./assertEqual")

let moveZeros = function (arr) {
  let newArray = [];
  let zeroArray = [];
  for(let i of arr) {
    newArray.push(arr[i])
    if(arr[i] === 0) {
      zeroArray.push(arr[i])
    }
  }
  return newArray.concat(zeroArray)
}


//test cases
assertEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])