//assertion 
const assertEqual = require("./assertEqual")

//function

function domainName(url){
  //your code here
}

//test
assertEqual(domainName("http://google.com"), "google");
assertEqual(domainName("http://google.co.jp"), "google");
assertEqual(domainName("www.xakep.ru"), "xakep");
assertEqual(domainName("https://youtube.com"), "youtube");