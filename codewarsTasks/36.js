function add(n) {
  function chain(nextValue) {
    return nextValue === undefined ? n : add(n + nextValue);
  }

  chain.valueOf = function () {
    return n;
  };

  return chain;
}