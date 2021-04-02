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

function getCount(str) {
  const obj = {a: 0, i: 0, u:0, e:0, o: 0 }
  let vowelsCount = 0;
  
  for (let vowel of str) {
    obj[vowel] += 1;
  }
  console.log(obj)

  for (let key in obj) {
    if (!isNaN(obj[key])) {
      vowelsCount += obj[key]
    }
  }
  
  return vowelsCount;
}

assertEqual(getCount("aiueo"), 5)
assertEqual(getCount("abracadabra"), 5)