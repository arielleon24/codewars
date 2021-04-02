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
  let mid = s.length / 2 
  if(s.length < 2) {
    return s[0]
  } else if(s.length % 2 === 0) {
    let midLessOne = s.length / 2 - 1 
    result += s[midLessOne]
    result += s[mid]
    return result
  } else {
    return s[Math.floor(mid)]
  }
}

assertEqual(getMiddle("test"),"es");
assertEqual(getMiddle("testing"),"t");
assertEqual(getMiddle("middle"),"dd");
assertEqual(getMiddle("A"),"A");