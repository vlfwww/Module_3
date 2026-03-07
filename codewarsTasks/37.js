Object.defineProperty(Function.prototype, "wrap", {
  value: function wrap(wrappedFunc, ...args) {
    let original = this;
    return function (...args) {
      return wrappedFunc(original, ...args);
    };
  },
});
