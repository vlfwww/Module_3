function* generator() {
  let count = 1;
  
  while(true){
    let result = yield count;
    if(result != undefined) count = result;
    else count+=1
  }

}