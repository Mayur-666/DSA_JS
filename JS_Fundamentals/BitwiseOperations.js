// Bitwise AND
let result = 5 & 3; // 0101 & 0011 = 0001
console.log(result); // Output: 1

// Bitwise OR
result = 5 | 3; // 0101 | 0011 = 0111
console.log(result); // Output: 7

// Bitwise XOR
result = 5 ^ 3; // 0101 ^ 0011 = 0110
console.log(result); // Output: 6

// Bitwise NOT
result = ~5; // ~0101 = 1010
console.log(result); // Output: -6

// Left Shift
result = 5 << 1; // 0101 << 1 = 1010
console.log(result); // Output: 10

// Right Shift
result = 5 >> 1; // 0101 >> 1 = 0010
console.log(result); // Output: 2

// Zero-fill Right Shift
result = -5 >>> 1; // 11111111111111111111111111111011 >>> 1 = 01111111111111111111111111111101
console.log(result); // Output: 2147483645