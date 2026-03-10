function getDivisorsCnt(n){
    let numberOfDivisors = 0;
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0) {
            if(i * i === n)
            numberOfDivisors += 1;
            else numberOfDivisors += 2;
        }
    }
    return numberOfDivisors;
}