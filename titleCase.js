/// Assertions
const assertEquals = require("./assertEqual")


function titleCase(title, minorWords) {
  const array = []
  if(title.length < 1) {
    return title
  } else if (!minorWords) {
    const titleWords = title.split(" ")
    for (let words of titleWords) {
      let upper = words[0].toUpperCase()
      const rest = words.substring(1)
      array.push(upper + rest)
    }
    return array.join(' ')

  } else {
    const titleWords = title.split(" ")
    console.log(minorWords) 
    const exception = minorWords.split(" ")
    console.log(titleWords)
  }
  
}

// Test cases
// assertEquals(titleCase(''), '')
// assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
// assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')