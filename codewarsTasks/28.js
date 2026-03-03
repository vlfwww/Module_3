function firstToLast(str, c) {
  if (str.indexOf(c) === -1) return -1;
  else if (str.lastIndexOf(c) === str.indexOf(c)) return 0;
  else return str.lastIndexOf(c) - str.indexOf(c);
}
