/// Assertions
const assertEqual = require("./assertEqual")


function incrementString (strng) {
  let numArray = [];
  if (!strng) {
    return 1
  } else {
    
    for(let char of strng) {
      if(char >= 0) {
        numArray.push(char)
      }
    }
    console.log(numArray)
    for (let i = numArray.length -1; i >= 0; i-- ){
      console.log(numArray[i])
    }
  }
}


//Test cases 

assertEqual(incrementString("foobar000"), "foobar001");
// assertEqual(incrementString("foo"), "foo1");
// assertEqual(incrementString("foobar001"), "foobar002");
assertEqual(incrementString("foobar99"), "foobar100");
assertEqual(incrementString("foobar099"), "foobar100");
// assertEqual(incrementString(""), "1");