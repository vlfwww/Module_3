function *fibonacci() {
  let [current,next] = [0,1];
  
  while(true){
    yield current;
    [current, next] = [next, current + next]
  }
}