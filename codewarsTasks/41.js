function mirrorImage(arr){
  let result = [-1, -1];
  
  arr.some((num, i) => {
    if (i >= arr.length - 1) return false;
    const firstNumber = num.toString();
    const secondNumber = String(arr[i + 1]).split("").reverse().join("");
    if (firstNumber === secondNumber) {
      result = [num, arr[i + 1]];
      return true;
    }
    return false;
  });

  return result;
}