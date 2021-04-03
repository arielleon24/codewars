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


///Kata

function iqTest(numbers){
  const odd = [];
  const even = [];
  let numToCheck = 0;
  const nums = numbers.split(" ")
  console.log(nums)
  for(let x of nums) {
    if(x % 2 === 0) {
      even.push(x);
    } else {
      odd.push(x);
    }
}
  if(odd.length < even.length) {
    numToCheck = odd[0]
    console.log(odd[0])
  } else {
    numToCheck = even[0]
    console.log(even[0])   
  }
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] === numToCheck) {
      return i + 1
    }
  }
}


//TEST 

assertEqual(iqTest("2 4 7 8 10"),3);
assertEqual(iqTest("1 2 2"), 1);