//assertions functions 
const assertEqual = require("./assertEqual")

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