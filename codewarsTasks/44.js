Function.prototype.call = function(thisParameter, ...args) {
  return this.apply(thisParameter, args)
};