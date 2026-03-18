function* multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    yield `${n} x ${i} = ${n * i}`;
  }
}

function* generator(a, b) {
  for (let i = a; i <= b; i++) {
    yield multiplicationTable(i); 
  }
}