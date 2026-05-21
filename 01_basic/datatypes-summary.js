// Primitive Data Types

// 7 types: Number, String, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);
const bigNumber = 65192782756274n;

// Reference (Non-Primitive)

// Array, Objects, Functions
// All Non-Primitive or Reference Data type's typeof will be OBJECT

const heros = ["JK", "AK", "RP"];
let myObject = 
{
    name: "Jaya",
    age: 22,
}

const myFunction = function() {
    console.log("Hello Jaya!");
}

console.log(typeof bigNumber);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof myObject);
console.log(typeof myFunction);
