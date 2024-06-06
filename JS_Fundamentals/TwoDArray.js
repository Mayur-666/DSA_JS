// 2d array from 1d

let arr = [1,2,3,4,5,6,7,8,9];

let twoDArr = [];

for(let i=0; i<arr.length; i++){
    if(i%3==0){
        twoDArr.push([]);
    }
    twoDArr[twoDArr.length-1].push(arr[i]);
}

console.log(twoDArr); // Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]