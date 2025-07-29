// Creating Arrays
let fruits = ['apple', 'banana', 'cherry'];

// Array Methods
let numbers = [1, 2, 3, 4, 5];

// Adding elements
numbers.push(6);  // Adds to the end
numbers.unshift(0);  // Adds to the beginning

// Removing elements
let lastNumber = numbers.pop();  // Removes from the end
let firstNumber = numbers.shift();  // Removes from the beginning

// Slicing
let slicedArray = numbers.slice(1, 4);  // Similar to Python's list slicing

// Splicing (modifies the original array)
numbers.splice(2, 1, 'a', 'b');  // Removes 1 element at index 2 and inserts 'a' and 'b'

// Array Destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second);  // 2
console.log(rest);  // [3, 4, 5]

// Creating Objects
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Accessing and Modifying Object Properties
console.log(person.name);  // John
console.log(person['age']);  // 30

person.job = 'Developer';  // Adding a new property
person['age'] = 31;  // Modifying an existing property

// Object Methods
let person = {
    name: 'John',
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

person.greet();  // Hello, my name is John

// Object Destructuring 
let { name, age } = person;
console.log(name);  // John
console.log(age);  // 31

// The Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

let obj1 = { x: 1, y: 2 };
let obj2 = { ...obj1, z: 3 };  // { x: 1, y: 2, z: 3 }