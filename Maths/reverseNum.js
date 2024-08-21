// O(logN) complexity
function reverseNum(num) {
    if(num<0) num *= -1;
    let revNum = 0;
    while(num>0){
        revNum = 10*revNum + num%10;
        num = Math.floor(num/10);
    }
    return revNum;
}

console.log(reverseNum(1000))
console.log(reverseNum(145353))
console.log(reverseNum(4530))
console.log(reverseNum(12))