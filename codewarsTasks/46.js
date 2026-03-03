function strCount(obj) {
  let count = 0;

  for (let key in obj) {
    let value = obj[key];
    if (typeof value === "string") {
      count++;
    } 
    else if (value !== null && typeof value === "object") {
      count += strCount(value); 
    }
  }

  return count;
}