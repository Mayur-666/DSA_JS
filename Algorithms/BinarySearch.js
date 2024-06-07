function binarySearchUsingLoop(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start<= end) {
        let mid = Math.floor(start + (end-start)/2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1; 
}

function binarySearchUsingRecursion(start, end, arr, target) {
    //exit condition
    if(start>end) return -1;
    
    let mid = Math.floor(start + (end-start)/2);
    
    if(arr[mid] === target) return mid;
    else if(arr[mid]<target) return binarySearchUsingRecursion(mid+1, end, arr, target);
    else return binarySearchUsingRecursion(start, mid-1, arr,target);
}

function printResult(result, value) {
    if (result !== -1) {
        console.log(`Element ${value} found at index: ${result}`);
    }else {
        console.log(`Element ${value} not found in the array`);
    }
}

// Example usage
const array = [2, 4, 6, 8, 10, 12, 14, 16];
const targetLoop = 10;
const targetRecursion = 12;

console.log("Using loop method: ")
printResult(binarySearchUsingLoop(array, targetLoop), targetLoop);

console.log("Using recursion method: ")
printResult(binarySearchUsingRecursion(0, array.length-1, array, targetRecursion), targetRecursion);



