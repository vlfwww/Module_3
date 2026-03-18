function cache(func) {
  const storage = new Map();
  
  return function(...args){
    let keyValue = JSON.stringify(...args);
    
    if(!storage.has(keyValue)){
      storage.set(keyValue,func(...args));
    };
    
    return storage.get(keyValue);
  }
}