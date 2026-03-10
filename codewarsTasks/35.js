function shuffleIt(arr, ...indexes) {
  for (let [indexA, indexB] of indexes) {
    [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
  }
  return arr;
}
