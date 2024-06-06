function PassByValue(a, b) {
    // Changing the value of a
    a = a+ 70;
    b = b + 50;
    console.log(`Inside Pass by Value Function -> a = ${a}, b = ${b}`);    
}


function PassbyReference(obj) {
    obj.c = 30

    console.log(`Inside Pass by Reference Function -> obj`);    
    console.log(obj);
}

let obj = {
    a: 10,
    b: 20
}

let a = 30, b = 50;

console.log(`Before calling Pass By Reference Function -> obj`);
console.log(obj);
PassbyReference(obj)
console.log(`After calling Pass By Reference Function -> obj`);
console.log(obj);

console.log(`Before calling Pass By Value Function -> a = ${a}, b = ${b}`);
PassByValue(a, b)
console.log(`After calling Pass By Value Function -> a = ${a}, b = ${b}`);