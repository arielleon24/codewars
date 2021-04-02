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

function getMiddle(s)
{
  result = ""
  if(s.length % 2 === 0) {
    let mid = s.length / 2 - 1
    let midNext = s.length / 2 
    result += s[mid]
    result += s[midNext]
    console.log(result)
  } else {
    
  }
}

assertEqual(getMiddle("test"),"es");
assertEqual(getMiddle("testing"),"t");
assertEqual(getMiddle("middle"),"dd");
assertEqual(getMiddle("A"),"A");