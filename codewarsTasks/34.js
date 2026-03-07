Num.prototype[Symbol.toPrimitive] = function(hint){
  return (hint === 'string') ? this.toString() : this.num;
}