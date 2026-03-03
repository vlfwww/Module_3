function infiniteLoop(arr, d, n) {
  let flatArr = arr[0].concat(arr[1], arr[2]);
  for (let i = 0; i < n; i++) {
    if (d === "left") {
      flatArr.push(flatArr.shift());
    } else if (d === "right") {
      flatArr.unshift(flatArr.pop());
    }
  }
  let res = [];
  let start = 0;
  for (let sub of arr) {
    res.push(flatArr.slice(start, start + sub.length));
    start += sub.length;
  }

  return res;
}
