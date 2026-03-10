function cutIt(arr) {
  let minLength = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < minLength) {
      minLength = arr[i].length;
    }
  }
  return arr.map((el) => el.slice(0, minLength));
}