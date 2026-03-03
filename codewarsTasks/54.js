function getCount(words) {
  const resultCount = { vowels: 0, consonants: 0 };
    if (typeof words !== "string") {
    return resultCount;
  }
  for (let char of words.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      if ("aeiou".includes(char)) {
        resultCount.vowels++;
      } else {
        resultCount.consonants++;
      }
    }
  }

  return resultCount;
}
