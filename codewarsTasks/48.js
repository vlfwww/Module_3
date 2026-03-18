function* generator(a) {
  let b = 0;

  while(true){
    yield `${a} x ${++b} = ${a*b}`
  }
  
}