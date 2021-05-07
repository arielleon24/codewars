//RULES
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

/// Assertions
const assertEqual = require("./assertEqual")

function score( dice ) {
  let diceRolls = [];
  let finalScore = 0
  const obj = {}
  for (let roll of dice) {
    if(obj[roll]) {
      obj[roll] += 1
    } else {
      obj[roll] = 1
    }
  }

  for(let key in obj) {
    diceRolls.push(key)
  }
  diceRolls = diceRolls.sort(function(a, b){return a - b})
  for(let x of diceRolls) {
    if(x === 5 && obj[x] === 1 && score < 50) {
      finalScore = 50
    } else if (x === 1 && obj[x] === 3) {
      finalScore = 100
    } else if(x === 1 && obj[x] === 1){
      finalScore = 1000
    } else if (obj[x] === 3) {
      finalScore = x + 0 + 0
    }
  }
  console.log(typeof finalScore)
  return Number(finalScore)
}

assertEqual(score( [2, 3, 4, 6, 2] ), 0)
assertEqual(score( [4, 4, 4, 3, 3] ), 400)