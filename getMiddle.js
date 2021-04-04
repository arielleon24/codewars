/// Assertions

const assertEqual = require("./assertEqual")

function getMiddle(s)
{
  result = ""
  let mid = s.length / 2 
  if(s.length < 2) {
    return s[0]
  } else if(s.length % 2 === 0) {
    let midLessOne = s.length / 2 - 1 
    result += s[midLessOne]
    result += s[mid]
    return result
  } else {
    return s[Math.floor(mid)]
  }
}

assertEqual(getMiddle("test"),"es");
assertEqual(getMiddle("testing"),"t");
assertEqual(getMiddle("middle"),"dd");
assertEqual(getMiddle("A"),"A");