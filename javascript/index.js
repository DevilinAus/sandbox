// This is my first javascript code!
console.log('Hello World');

let firstName = 'Andrew'; 
let lastName = 'Daniels';
console.log(firstName);

// Lesson 2
let interestRate = 0.3;
const storeID = 345 // constants for things that don't get changed.
interestRate = 1;
console.log(interestRate);

// Lesson 3
let name = 'Mosh'; // String Literal
let age = 30; // Number Literal
let isApproved = false // Boolean Literal 
let firstNamme = undefined;
let selectedColor = null;

// Lesson 4 - Objects
let person = {
  name: 'Andrew',
  age: 33,  
};

// Dot Notation
console.log(person.age)

// Bracket Notation 
console.log(person['name'])

// Objects
let selectedColours = ['red', 'blue', 'green'];
selectedColours[2] = 1;
console.log(selectedColours.length)

// Functions
function greet(parameter, parameter2) {
    console.log('Hello ' + parameter + ' ' + parameter2);
}

// greet('Fellow');
// greet('Mary');

greet('Mary', 'Poppins')

// Calculating a value
function square(number) {
    return number * number;
}


console.log(square(2));