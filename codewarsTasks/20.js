function splitTheBill(x) {
  let result = {};
  let expenses = Object.values(x);
  let count = expenses.length;
  
  let average = expenses.reduce((sum, el) => sum + el, 0) / count;
  
  for (let name in x) {
    let diff = x[name] - average;
    
    result[name] = Math.round(diff * 100) / 100;
  }
  
  return result;
}