// Block Scope with let and const
if (true) {
    let x = 10;
    const y = 20;
    console.log(x, y); // 10, 20
}
console.log(x, y); // ReferenceError: x is not defined

// Closures
function outerFunction(x) {
    return function(y) {
        return x + y;
    };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8

// The Module System
// math.js
export function add(a, b) {
    return a + b;
}

export const PI = 3.14159;

// main.js
import { add, PI } from './math.js';

console.log(add(2, 3)); // 5
console.log(PI); // 3.14159


// CommonJS Modules
// Node.js traditionally uses the CommonJS module system:

// math.js 
module.exports = {
    add: function(a, b) {
        return a + b;
    },
    PI: 3.14159
};

// main.js
const math = require('./math.js');

console.log(math.add(2, 3)); // 5
console.log(math.PI); // 3.14159

// To make a module in JavaScript, you simply create a new file and use export to make functions, objects
// or other variables available to other parts of your program. 
export function greet(name) {
    return `Hello, ${name}!`;
}

export const DEFAULT_GREETING = 'Hello, World!';

// You can also have a default export
export default function() {
    console.log('I am the default export');
}

// You can then import and use these in another file:
import defaultFunction, { greet, DEFAULT_GREETING } from './myModule.js';

console.log(greet('Alice')); // Hello, Alice!
console.log(DEFAULT_GREETING); // Hello, World!
defaultFunction(); // I am the default export