Array.prototype.reduce = function(process, initial) {
  let hasInitial = initial !== undefined;
  let accumulator = hasInitial ? initial : this[0];
  let startIndex = hasInitial ? 0 : 1;
  
  for(let i = startIndex; i < this.length; i++){
    accumulator = process(accumulator, this[i]);
  }
  
  return accumulator;
  
}