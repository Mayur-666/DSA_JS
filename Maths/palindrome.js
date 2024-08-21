// O(logN) complexity
function reverseNum(num) {
    if(num<0) num *= -1;
    let revNum = 0;
    while(num>0){
        revNum = 10*revNum + num%10;
        num = Math.floor(num/10);
    }
    return revNum
}

console.log(14541 === reverseNum(14541))
console.log(14541 === reverseNum(12345))