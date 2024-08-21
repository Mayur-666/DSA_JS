function checkArmstrong(num) {
    let ans = 0;
    let digits = Math.floor(Math.log10(num)) + 1;
    let temp = num; 
    while(num > 0){
        ans = ans + Math.pow(num%10,digits)
        num = Math.floor(num/10);
    }
    return temp === ans ? "an" : "not an";
}

let num = 153;

console.log(num + " is " + checkArmstrong(num) + " Armstrong Number.")