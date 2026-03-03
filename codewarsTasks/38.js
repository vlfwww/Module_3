function sortIt(arr) {
  const arrayInfo = {};
  arr.forEach((num) => (arrayInfo[num] = (arrayInfo[num] || 0) + 1));

  return [...arr].sort((a, b) => {
    const countA = arrayInfo[a];
    const countB = arrayInfo[b];

    if (countA !== countB) {
      return countA - countB;
    }

    return b - a;
  });
}