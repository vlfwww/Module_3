function countLanguages(list) {
  let languages = {};
  for (const developer of list) {
    languages[developer.language] = (languages[developer.language] || 0) + 1;
  }
  return languages;
}