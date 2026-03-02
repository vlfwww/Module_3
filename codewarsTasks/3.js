function oddBall(arr) {
  let number = arr.filter((el) => typeof el === "number");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "odd" && number.includes(i)) {
      return true;
    }
  }
  return false;
}
