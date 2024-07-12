function sumOfNum(n) {
    if(n<=0){
        return 0;
    }
    return n + sumOfNum(n-1);
}
function fact(num) {
    if (num<=1) {
        return 1;
    }
    return num * fact(num-1);
}
console.log("Sum "+sumOfNum(20))
console.log("Factorial "+ fact(5))
