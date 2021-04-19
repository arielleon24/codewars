//rules
/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false. */

function generateHashtag (str) {
  const string = str.replace(/\s/g, "")
  if (string.length === 0){
    console.log(false)
    return false
  } else {
    const mySentence = str;
    const words = mySentence.split(" ");

    for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
    let result = words.join(" ").replace(/\s/g, "")
    console.log(result)
    return "#" + result;
  }

}

generateHashtag(" ".repeat(200))