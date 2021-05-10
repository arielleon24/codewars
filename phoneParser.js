//Goal- functionn takes in numbers array and gives back string in phone number format

/// Assertions
const assertEqual = require("./assertEqual")

const phoneParse = (arr) => {
  let format = "(xxx) xxx-xxxx"
  arr.forEach(i => {
    format = format.replace('x', i)
  });
  return format
}

assertEqual(phoneParse([5,1,4,5,3,1,4,7,3,2]), "(514) 531-4732")
assertEqual(phoneParse([5,1,4,2,3,2,4,2,7,2]), "(514) 232-4272")
assertEqual(phoneParse([5,1,4,5,3,1,4,7,3,2]), "(450) 333-4455")
assertEqual(phoneParse([5,1,4,5,3,1,4,7,3,2]), "(819) 529-5532")