/// Assertions
const assertEqual = require("./assertEqual")

function getCount(str) {
  const obj = {a: 0, i: 0, u:0, e:0, o: 0 }
  let vowelsCount = 0;
  
  for (let vowel of str) {
    obj[vowel] += 1;
  }

  for (let key in obj) {
    if (!isNaN(obj[key])) {
      vowelsCount += obj[key]
    }
  }
  
  return vowelsCount;
}

assertEqual(getCount("aiueo"), 5)
assertEqual(getCount("abracadabra"), 5)