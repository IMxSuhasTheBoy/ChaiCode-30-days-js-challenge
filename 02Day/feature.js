//* 1. script that basic arithmetic operations on two numbers and logs the results
const num1 = 5;
const num2 = 3;

const sumResult = num1 + num2;
console.log(`Sum: ${sumResult}`);

const subResult = num1 - num2;
console.log(`Subtraction: ${subResult}`);

const mulResult = num1 * num2;
console.log(`Multiplication: ${mulResult}`);

const divResult = num1 / num2;
console.log(`Division: ${divResult}`);

const remainderResult = num1 % num2;
console.log(`Remainder: ${remainderResult}`);

//* 2. script that compares two numbers using different comparison operators and combines conditions using logican operrators, looging the results
const a = 20;
const b = 10;

// Comparison operators
console.log(`a > b : ${a > b}`);
console.log(`a < b : ${a < b}`);
console.log(`a >= b : ${a >= b}`);
console.log(`a <= b : ${a <= b}`);
console.log(`a == b : ${a == b}`);
console.log(`a != b : ${a != b}`);
console.log(`a === b : ${a === b}`);
console.log(`a !== b : ${a !== b}`);

// Logical operators
const conditionA = false;
const conditionB = true;

console.log(`conditionA && conditionB : ${conditionA && conditionB}`);
console.log(`conditionA || conditionB : ${conditionA || conditionB}`);
console.log(`!conditionA : ${!conditionA}`);

//* 3. script that uses ternary operator to determine if a number is positive, negative or zero and logs the result

const num = -10;

const result = num > 0 ? "positive" : num < 0 ? "negative" : "zero";
console.log(result);
