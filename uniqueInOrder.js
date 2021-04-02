//assertions functions 

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