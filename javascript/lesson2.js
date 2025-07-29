// Variables
var oldWay = "I'm using var";
let modernWay = "I'm using let";
const constant = "I'm a constant";

// Data Types
let number = 42;
let float = 3.14;
let string = "Hello, World!";
let boolean = true;
let nullValue = null;
let undefinedValue;
let array = [1, 2, 3];
let object = { key: "value" };

// Main difference is JavaScript doesn't distinguish between integers and floats like Python.
// JavaScript has null and undefined, whilst Python only has None.

// JavaScript performs automatic type coercion, which can lead to unexpected results:
console.log("5" + 3);  // Outputs: "53"
console.log("5" - 3);  // Outputs: 2

// Basic Operators.
let a = 5;
let b = 2;

console.log(a + b);  // Addition: 7
console.log(a - b);  // Subtraction: 3
console.log(a * b);  // Multiplication: 10
console.log(a / b);  // Division: 2.5
console.log(a % b);  // Modulus: 1
console.log(a ** b); // Exponentiation: 25

console.log(a === b);  // Strict equality: false
console.log(a !== b);  // Strict inequality: true
console.log(a > b);    // Greater than: true

console.log(true && false);  // Logical AND: false
console.log(true || false);  // Logical OR: true
console.log(!true);          // Logical NOT: false

// The main differences from Python are:

//     JavaScript uses === for strict equality (type and value), while == allows type coercion.
//     The logical operators are &&, ||, and ! instead of and, or, and not.
//     JavaScript has a typeof operator to check types:
