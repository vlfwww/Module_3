function rndCode() {
  let result = "";
  const lettersRange = "ABCDEFGHIJKLM";
  const symbolsRange = "~!@#$%^&*";

  for (let i = 0; i < 2; i++) {
    const index = Math.floor(lettersRange.length * Math.random());
    result += lettersRange[index];
  }
  for (let i = 0; i < 4; i++) {
    const number = Math.floor(10 * Math.random());
    result += number.toString();
  }

  for (let i = 0; i < 2; i++) {
    const index = Math.floor(symbolsRange.length * Math.random());
    result += symbolsRange[index];
  }
  
  return result;
}
