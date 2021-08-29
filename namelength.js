"use strict";

const name = "Albus Percival Wulfric Brian Dumbledore";

// What is the total number of characters, including spaces? 39

const len = name.length;

console.log(`${name} is ${len} characters long`);

// What is the character at index 2? b

const letter = name[2];

console.log(`The character at index 2 is ${letter}`);

// What is the character at index 6? P

const newletter = name[6];

console.log(`The character at index 2 is ${newletter}`);

// What is the index of the first D in Dumbledore? 29

const firstd = name.indexOf("Dumbledore");

console.log(`The first D in Dumbledore is at index ${firstd}`);

// What is the index of the last e in Dumbledore?

const laste = name.lastIndexOf("Dumbledore");

console.log(`The last e in Dumbledore is at index ${laste}`);