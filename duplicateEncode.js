//assertions functions 
const assertEqual = require("./assertEqual")

//  KATA ------------

function duplicateEncode(word){
  let array = []
  const result = {}
    for (let letter of word) {
      if (array.includes(letter)) {
        array.push(letter.toLowerCase()); 
        let key = letter.toLowerCase()
        result[key] ++
      } else {
        array.push(letter); 
        let key = letter.toLowerCase()
        result[key] = 1
      }
    }
  let str = "";
  for (let y of word){
    if(result[y.toLowerCase()] > 1) {
      str += ")"
    } else {
      str += "("
    }
  
  }
   return str   
}
    
assertEqual(duplicateEncode("din"),"(((");
assertEqual(duplicateEncode("recede"),"()()()");
assertEqual(duplicateEncode("Success"),")())())","should ignore case");
assertEqual(duplicateEncode("(( @"),"))((");