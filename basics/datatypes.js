"use strict";

//alert(3+3);

// 1. Number
let age = 25;
console.log(typeof age); // "number"
//bigint
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"
 
//symbol
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // "symbol"

// 2. String
let name = "Alice";
console.log(typeof name); // "string"

// 3. Boolean
let isStudent = true;
console.log(typeof isStudent); // "boolean"

// 4. Undefined
let score;
console.log(typeof score); // "undefined"

// 5. Null
let data = null;
console.log(typeof data); // "object" (special case in JS)

// 6. Object
let person = { name: "Bob", age: 30 };
console.log(typeof person); // "object"

// 7. Array (a type of object)
let colors = ["red", "green", "blue"];
console.log(Array.isArray(colors)); // true

// 8. Function
function greet() {
    return "Hello!";
}
console.log(typeof greet); // "function"