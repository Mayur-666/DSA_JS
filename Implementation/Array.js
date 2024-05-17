const arr = ['a', 'b','c','d']

console.log(arr.concat(['e', 'f'])) // Concatenates two arrays
console.log(arr.join('-')) // Joins all elements of an array into a string
console.log(arr.indexOf('b')) // Returns the first index at which a given element can be found in the array
console.log(arr.lastIndexOf('c')) // Returns the last index at which a given element can be found in the array
console.log(arr.includes('d')) // Determines whether an array contains a certain element
console.log(arr.reverse()) // Reverses the order of the elements in an array
console.log(arr.sort()) // Sorts the elements of an array in place and returns the sorted array
console.log(arr.splice(2, 1, 'x', 'y')) // Changes the contents of an array by removing or replacing existing elements and/or adding new elements
console.log(arr.pop()) // Removes the last element from an array and returns that element
console.log(arr.push('z')) // Adds one or more elements to the end of an array and returns the new length of the array
console.log(arr.shift()) // Removes the first element from an array and returns that element
console.log(arr.unshift('w')) // Adds one or more elements to the beginning of an array and returns the new length of the array
console.log(arr.toString()) // Converts an array to a string and returns the result
console.log(arr.fill('x', 1, 3)) // Changes all elements in an array to a static value, from a start index to an end index
console.log(arr.find(element => element === 'b')) // Returns the first element in the array that satisfies the provided testing function
console.log(arr.findIndex(element => element === 'c')) // Returns the index of the first element in the array that satisfies the provided testing function
console.log(arr.every(element => typeof element === 'string')) // Tests whether all elements in the array pass the provided testing function
console.log(arr.some(element => element.length === 1)) // Tests whether at least one element in the array passes the provided testing function
console.log(arr.filter(element => element === 'a' || element === 'b')) // Creates a new array with all elements that pass the provided testing function
console.log(arr.map(element => element.toUpperCase())) // Creates a new array with the results of calling a provided function on every element in the array
console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue)) // Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
console.log(arr.reduceRight((accumulator, currentValue) => accumulator + currentValue)) // Applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value
console.log(arr.flat()) // Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
console.log(arr.flatMap(element => [element, element])) // Creates a new array with the results of calling a provided function on every element in the array, and then flattens the result into a new array
console.log(arr.includes('d')) // Determines whether an array contains a certain element