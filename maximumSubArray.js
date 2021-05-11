const maxSequence = function(arr){
  const total = 0
  if(arr.length < 1) {
    return 0
  } else {
    arr.forEach(x => {
      total += x
    });
  }
  return total
}