/// Assertions

const assertEqual = require("./assertEqual")
/// Kata ------------

function longest(s1, s2) {
  const array = [];

  for (let char of s1) {
    if (!array.includes(char)) {
      array.push(char)
    }
  }

  for (let char of s2) {
    if (!array.includes(char)) {
      array.push(char)
    }
  }

  return array.sort().join("")
}

assertEqual(longest("aretheyhere", "yestheyarehere"), "aehrsty")
assertEqual(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
assertEqual(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
