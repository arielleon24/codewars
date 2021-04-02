var uniqueInOrder=function(iterable){
  const array = [];
  let index = 1;
  for(let element of iterable) {
    console.log(element)
    if (element === iterable[index]) {
      console.log("matches")
      index ++
    } else {
      console.log("doesn't")
      array.push(element)
      index ++
    }
  }
    
    return array
  
  }