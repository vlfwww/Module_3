function topSecret(file) {
  let resultString = "";
  for (let i = 0; i < file.length; i++) {
    let character = file.charAt(i);
    let codeCharacter = character.charCodeAt(0);

    if (character >= "A" && character <= "Z") {
      codeCharacter = ((codeCharacter - 65 - 3 + 26) % 26) + 65;
    } else if (character >= "a" && character <= "z") {
      codeCharacter = ((codeCharacter - 97 - 3 + 26) % 26) + 97;
    }

    resultString += String.fromCharCode(codeCharacter);
  }
  return resultString;
}

//question1: The top secret file number is...
answer1="4271";
//question2: Super agent's name is...
answer2="wIKQs";
//question3: He stole the treasure is...
answer3="Marie's husband";