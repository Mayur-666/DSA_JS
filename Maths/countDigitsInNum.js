let posNum = 73;
let negNum = 133;

// O(N) Complexity
function countDigitsWithLoop(num){
    if(num<0) num *= (-1);
    let count = 0;
    while(num>0){
        num = Math.floor(num/10);
        count++
    }
    return count;
}

// O(1) Complexity
function countDigits(num){
    return Math.floor(Math.log10(num)+1);
}
console.log("With Loop: " + countDigitsWithLoop(posNum))
console.log("With Loop: " +countDigitsWithLoop(negNum))
console.log(countDigits(posNum))
console.log(countDigits(negNum))