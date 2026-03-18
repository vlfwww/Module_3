Function.prototype.bind = function (ctx) {
  if (this._isBound) {
    this._currentContext = ctx;
    return this; 
  }

  let original = this;

  let bound = function() {
    return original.apply(bound._currentContext, arguments);
  };

  bound._isBound = true;
  bound._currentContext = ctx;

  return bound;
};