// Complete the method that takes a boolean value and return 
// a "Yes" string for true, or a "No" string for false.

//assertion 

const assertEqual = require("./assertEqual")

//function

function boolToWord( bool ){
  return (bool === false? 'No' : 'Yes');
}

//test cases

assertEqual(boolToWord(true), 'Yes')
assertEqual(boolToWord(false), 'No')