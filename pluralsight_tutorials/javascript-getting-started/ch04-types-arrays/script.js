// 4. Types and Arrays

// 4.2 Type Basics - Strings and Numbers

let value = "apple";
console.log(typeof(value)); // string

let value = 99;
console.log(typeof(value)); // number

// JavaScript works with strange values, 
// other programming languages will throw an error

let value = 4.1 + 4.3;
console.log(value); // 8.399999999999999

let value = 10 + 0;
console.log(value); // Infinity

let value = 0 / 0;
console.log(value, typeof value); // NaN

// 4.3 Boolean Types

let value = false,
    value2 = true;

console.log(value, typeof(value)); // false boolean
console.log(value2, typeof(value2)); // true boolean

// 4.4 undefined and null

let calculateSalesTax;
console.log(calculateSalesTax, typeof(calculateSalesTax)); // undefined  undefined

let calculateSalesTax = null;
console.log(calculateSalesTax, typeof(calculateSalesTax)); // null  object

// 4.5 Storing Multiple Values in Arrays

let values = [1, 2, 3];
console.log(values[0]); // 1
console.log(values[1]); // 2
console.log(values[2]); // 3
console.log(values[3]); // undefined

// 4.6 Array Features

let values = [0, 1, 2, 3];
console.log(values.length); // 4

// Push
let values = [];
values.push(44);
values.push(33); // [44, 33]

// Pop
let values = [1, 2, 3];
let result = values.pop(); // 3

// Shift
let values = [1, 2, 3];
let result = values.shift(); // 1

// Deleting using splice
let values = [1, 2, 3, 44];
values.splice(3, 1)
console.log(values); // [1, 2, 3]

// Inserting using splice
let values = [1, 2, 3, 44];
values.splice(0, 3, 11, 22, 33)
console.log(values); // [11, 22, 33, 44]