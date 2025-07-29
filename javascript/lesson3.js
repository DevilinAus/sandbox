// If/Else Statements
if (condition) {
    // code block
} else if (anotherCondition) {
    // code block
} else {
    // code block
}

// Switch Statements (like elif in Python)
switch (variable) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}

// For Loop (feels kind of similar to c++)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
let j = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do-While Loop (Python doesn't have this)
let k = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// Apparently will execute at least once, even if the condition is false.

// Iterating Over Arrays and Objects
// For arrays (similar to Python's for item in list)
const arr = [1, 2, 3];
for (const item of arr) {
    console.log(item);
}

// For objects (similar to Python's for key in dict)
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key, obj[key]);
}

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const greet2 = function(name) {
    return `Hello, ${name}!`;
};

// Arrow function (ES6+)
const greet3 = (name) => {
    return `Hello, ${name}!`;
};

// Shorthand arrow function (for single expressions)
const greet4 = name => `Hello, ${name}!`;

// Default Parameters
// JS supports default parameters, just like Python
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

// Rest Parameters (Not really sure what this is or does.)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10