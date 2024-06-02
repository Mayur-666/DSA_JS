const obj = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
}
console.log(Object.keys(obj)) 
console.log(Object.values(obj))
console.log(Object.entries(obj)) 
console.log(Object.assign(obj, {name: 'Jane'})) 
console.log(obj.name);
console.log(obj.age); //prints age