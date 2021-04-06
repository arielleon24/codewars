/// Assertions
const assertEqual = require("./assertEqual")

function solution(number){
  for(i = number; i > 0; i--) {
    console.log(number)
  }
}


assertEqual(solution(10,23))