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

function duplicateEncode(word){
  let array = []
  const result = {}
    for (let letter of word) {
      if (array.includes(letter)) {
        array.push(letter.toLowerCase()); 
        let key = letter.toLowerCase()
        result[key] ++
      } else {
        array.push(letter); 
        let key = letter.toLowerCase()
        result[key] = 1
      }
    }
  let str = "";
  for (let y of word){
    if(result[y.toLowerCase()] > 1) {
      str += ")"
    } else {
      str += "("
    }
  
  }
   return str   
}
    