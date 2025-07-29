// String Methods
let str = "Hello, World!";

console.log(str.length);  // 13
console.log(str.toUpperCase());  // "HELLO, WORLD!"
console.log(str.toLowerCase());  // "hello, world!"
console.log(str.indexOf("World"));  // 7
console.log(str.slice(0, 5));  // "Hello"
console.log(str.replace("World", "JavaScript"));  // "Hello, JavaScript!"

// Template Literals
let name = "Alice";
let age = 30;

let greeting = `Hello, ${name}!
You are ${age} years old.`;

console.log(greeting);
// Output:
// Hello, Alice!
// You are 30 years old.

// The main difference between JavaScript and Python is template literals can contain
// any valid JS expression inside the ${} placeholders, not just variable names.
let a = 5;
let b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// Output: The sum of 5 and 10 is 15.

// Tagged Template Literals
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) =>
        `${result}${string}<span class="highlight">${values[i] || ''}</span>`, '');
}

let name2 = "Alice";
let age2 = 30;

let result = highlight`My name is ${name} and I'm ${age} years old.`;
console.log(result);
// Output: My name is <span class="highlight">Alice</span> and I'm <span class="highlight">30</span> years old.