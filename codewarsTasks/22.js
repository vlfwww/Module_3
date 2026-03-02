function howManySmaller(arr, n) {
  let count = 0;
  for (let el of arr) {
    if (el.toFixed(2) < n) count++;
  }
  return count;
}
