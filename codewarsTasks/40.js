function pipeline(seed, ...functions) {
  return functions.reduce((acc,f) => f(acc), seed)
};

function compose(...functions) {
  return function(obj){
    return functions.reduceRight((acc,f) => f(acc), obj )
  }
};