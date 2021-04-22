/// Assertions
const assertEqual = require("./assertEqual")


function titleCase(title, minorWords) {
  if(title.length < 1) {
    return title
  } else {
    
  }
  const titleWords = title.split(" ")
  const exception = minorWords.split(" ")
  
}

// Test cases
assertEquals(titleCase(''), '')
assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')