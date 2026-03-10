function maxMin(arr1,arr2){
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr.push(Math.abs(arr1[i] - arr2[i]));
  }
  return [Math.max(...arr), Math.min(...arr)];
}