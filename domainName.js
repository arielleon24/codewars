//assertion 
const assertEqual = require("./assertEqual")

//function

function domainName(url){
  let result = ""
  for(let letter of url){
    result += letter
  }
  console.log
}

//test
assertEqual(domainName("http://google.com"), "google");
assertEqual(domainName("http://google.co.jp"), "google");
assertEqual(domainName("www.xakep.ru"), "xakep");
assertEqual(domainName("https://youtube.com"), "youtube");