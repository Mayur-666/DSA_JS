let num = 64;

//to store divisors
let arr = []

for(let i=0; i<Math.sqrt(num); i++){
    if(num%i === 0){
        arr.push(Number(i))
        arr.push(i !== num/i && Number(num/i))
    }
}

console.log("Divisors of " + num + " are: " + arr.sort((a, b) => a-b))
