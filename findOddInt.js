// Goal 

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

/// Assertions

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌ Assertion Failed ❌: ${actual} !== ${expected}`);
    return false;
  }
};
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function (array1, array2) {
  let results = eqArrays(array1, array2)
  if (!results) {
    console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`😃😃😃 Assertion Passed: ${array1} === ${array2}`);
  }
};

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
  return 0;
}

assertEqual(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
assertEqual(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
assertEqual(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
assertEqual(findOdd([10]), 10);
assertEqual(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
assertEqual(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);

