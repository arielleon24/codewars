/// Assertions
const assertEquals = require("./assertEqual")

const modify = (word) =>{
  let upper = word[0].toUpperCase()
  let rest = word.substring(1)
  return upper + rest
}

function titleCase(title, minorWords) {
  const array = []
  if(title.length < 1) {
    return title
  } else if (!minorWords) {
    const titleWords = title.split(" ")
    for (let words of titleWords) {
      array.push(modify(words))
    }
    return array.join(' ')

  } else {
    const titleWords = title.toLowerCase().split(" ")
    const exception = minorWords.toLowerCase().split(" ")
    titleWords.forEach(word => {
      if(word === titleWords[0]){
        array.push(modify(word))
      } else if (word !== titleWords[0] && !exception.includes(word)) {
        array.push(modify(word))
      } else if (exception.includes(word)) {
        array.push(word)
      }
    });
    console.log(array.join(' '))
    return array.join(' ')
  }
  
}

// Test cases
// assertEquals(titleCase(''), '')
assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
// assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')