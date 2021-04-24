/// Assertions
const assertEqual = require("./assertEqual")


function incrementString (strng) {
  // return incrementedString
}


//Test cases 

assertEqual(incrementString("foobar000"), "foobar001");
assertEqual(incrementString("foo"), "foo1");
assertEqual(incrementString("foobar001"), "foobar002");
assertEqual(incrementString("foobar99"), "foobar100");
assertEqual(incrementString("foobar099"), "foobar100");
assertEqual(incrementString(""), "1");