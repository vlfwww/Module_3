function roundIt(n){
  let arr = n.toString().split('.');
  if (arr[0].length > arr[1].length) return Math.floor(n);
  if (arr[0].length < arr[1].length) return Math.ceil(n);
  return Math.round(n);
}