// Goal 

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

/// Assertions

const assertEqual = require("./assertEqual")

///Kata

function findOdd(A) {
  const intObj = {}
  for (let int of A) {
    if(!intObj[int]) {
      intObj[int] = 1
    } else {
      intObj[int] += 1
    }
  }
  for(let key in intObj) {
    if(intObj[key] % 2 === 1) {
      console.log(typeof key)
      return Number(key)
    }
  }
  return 0;
}

assertEqual(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
assertEqual(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
assertEqual(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
assertEqual(findOdd([10]), 10);
assertEqual(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
assertEqual(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);

