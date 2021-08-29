"use strict";

const name = "Peter";
const drink = "Coca-cola";

const text = `Hello ${name}, 
would you like a ${drink}?`;

console.log(text);

const len = name.length;

console.log(`${name} is ${len} characters long`);

const letter = name[0];
console.log(`The first letter of ${name} is ${letter}`);

const str1 = "   There is     space here \n  ";

console.log(str1);

const str2 = str1.trim();

console.log(str2);