// O(min(a,b))
function gcd(a,b) {
    for(let i=Math.min(a,b); i>=1; i--){
        if(a%i ===0 && b%i===0){
            return i;
        }
    }
    return 1;
}

console.log(gcd(9,12))
console.log(gcd(9,13))
console.log(gcd(20,15))

// optimal approach
function euclideanGCD(a,b) {
    while (a>0 && b>0) {
        if(a>b){
            a %= b;
        }else{
            b %= a;
        }
    }
    return a===0 ? b: a;
}


console.log(euclideanGCD(9,12))
console.log(euclideanGCD(9,13))
console.log(euclideanGCD(20,15))