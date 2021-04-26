//assertion 
const assertEqual = require("./assertEqual")

//function

function domainName(url){
  let result = []
  array = url.split("/")
  const target = array.forEach((element, index) => {
    let addOne = index + 1
    array[addOne] === undefined? result.push(array[index]) : "";
  });
  const finalRes = result.toString().split(".")
  return (finalRes[0] === 'www'? finalRes[1] : finalRes[0])
}

//test
assertEqual(domainName("http://google.com"), "google");
assertEqual(domainName("http://google.co.jp"), "google");
assertEqual(domainName("www.xakep.ru"), "xakep");
assertEqual(domainName("https://youtube.com"), "youtube");