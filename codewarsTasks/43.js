function tailAndHead(arr) {
  let resultArray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let tail = arr[i].toString()[arr[i].toString().length - 1];
    let head = arr[i + 1].toString()[0];
    resultArray.push(Number(tail) + Number(head));
  }

  return resultArray.reduce((a, b) => a * b);
}
