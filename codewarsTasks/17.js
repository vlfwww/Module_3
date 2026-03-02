function padIt(str, n) {
  while (n > 0) {
    if (n % 2 === 0) {
      str = "*" + str + "*";
      n -= 2;
    } 
    else {
      str = "*" + str;
      n--;
    }
  }
  return str;
}
