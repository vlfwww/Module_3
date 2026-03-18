Object.deepFreeze = function (object) {
  Object.freeze(object);
  for(let key in object){
    if(typeof(object[key]) === 'object' && object[key] != null) Object.deepFreeze(object[key]);
  }
}