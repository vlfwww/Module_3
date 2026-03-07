Function.prototype.pipe = function(...functions) {
  return (input) => functions.reduce((acc, f) => f(acc), this(input));
};