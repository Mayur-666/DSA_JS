function checkPalindrome(string, i){
    if(i>=(string.length/2)){
        return true;
    }
    if(string.charAt(i) !== string.charAt(string.length-i-1)){
        return false;
    }
    return checkPalindrome(string,++i);
}
console.log(checkPalindrome("titanicinatit", 0)); // true

