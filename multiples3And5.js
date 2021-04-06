/// Assertions
const assertEqual = require("./assertEqual")

function getSum(total, num) {
  return total + Math.round(num);
}

function solution(number){
  const array = [];
  for(i = number - 1; i > 0; i--) {
    console.log(i)
    if(i % 3 === 0) {
      array.push(i)
    } else if (i % 5=== 0) {
      array.push(i)
    }
  }
  return array.reduce(getSum)
}


assertEqual(solution(10), 23)