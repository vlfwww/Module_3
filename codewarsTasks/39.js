function isolateIt(arr) {
  return arr.map((el) => {
    const middleIndex = Math.floor(el.length / 2);
    return el.slice(0, middleIndex) + "|" + el.slice(middleIndex + (el.length % 2));
  });
}
