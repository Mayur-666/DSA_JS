const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
}
console.log(Object.keys(obj)) // Returns an array of a given object's own enumerable property names
console.log(Object.values(obj)) // Returns an array of a given object's own enumerable property values
console.log(Object.entries(obj)) // Returns an array of a given object's own enumerable string-keyed property [key, value] pairs
console.log(Object.assign(obj, {name: 'Jane'})) // Copies all enumerable own properties from one or more source objects to a target object
console.log(obj.name)
console.log(obj.age)