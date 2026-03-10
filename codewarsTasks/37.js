function threeInOne(arr) {
  const copy = arr.slice();
  let result = [];
  while (copy.length > 0) {
    let triple = copy.splice(0, 3);
    let sum = triple.reduce((a, b) => a + b, 0);
    result.push(sum);
  }
  return result;
}
