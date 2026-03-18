function findSimilarity(str,word){
  let strDots = "";

  for (let i = 0; i < word.length - 2; i++) {
    strDots += ".";
  }
  
  var regTest = new RegExp("\\b" + word[0] + strDots + word.slice(-1) + "\\b", "g");
  
  return (str.match(regTest) || []).join(" ");
}