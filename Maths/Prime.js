function isPrime(num) {
    for(let i=2; i<Math.sqrt(num); i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(11))
console.log(isPrime(13))
console.log(isPrime(29))
console.log(isPrime(117))
console.log(isPrime(27))
console.log(isPrime(14))
console.log(isPrime(2))