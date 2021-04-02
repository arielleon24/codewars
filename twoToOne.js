// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, 
// containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

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

/// Kata ------------

function longest(s1, s2) {
  const array = [];

  for (let char of s1) {
    if (!array.includes(char)) {
      array.push(char)
    }
  }

  for (let char of s2) {
    if (!array.includes(char)) {
      array.push(char)
    }
  }

  return array.sort().join("")
}

assertEqual(longest("aretheyhere", "yestheyarehere"), "aehrsty")
assertEqual(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
assertEqual(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
