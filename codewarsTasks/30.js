function alienLanguage(str){
  let arr = str.split(' ');
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].slice(0, -1).toUpperCase() + arr[i][arr[i].length - 1].toLowerCase();
  }
  return arr.join(' ');
}