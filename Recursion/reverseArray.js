function reverseArray(arr, i= 0) {
    if(i>=arr.length/2){
        return arr;
    }
    let temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
    i++;
    return reverseArray(arr, i);
}

console.log(reverseArray([1,2,3,4,5,6]))