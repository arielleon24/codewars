/// Assertions
const assertEquals = require("./assertEqual")


function titleCase(title, minorWords) {
  if(title.length < 1) {
    return title
  } else if (minorWords.length < 1) {
    
  }
  const titleWords = title.split(" ")
  console.log(minorWords) 
  const exception = minorWords.split(" ")
  console.log(titleWords)
  
}

// Test cases
assertEquals(titleCase(''), '')
assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')