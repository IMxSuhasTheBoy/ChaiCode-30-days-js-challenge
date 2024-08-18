/** 1. script that basic arithmetic operations on two numbers and logs the results */
const num1 = 5;
const num2 = 3;

const addResult = num1 + num2;
console.log(`Add: ${addResult}`);

const subResult = num1 - num2;
console.log(`Subtraction: ${subResult}`);

const mulResult = num1 * num2;
console.log(`Multiplication: ${mulResult}`);

const divResult = num1 / num2;
console.log(`Division: ${divResult}`);

const remainderResult = num1 % num2;
console.log(`Remainder: ${remainderResult}`);

//
//
//
//
//
//
//
//
/** 2. script that compares two numbers using different comparison operators and combines conditions using logican operrators, looging the results */
const numberA = 20;
const numberB = 10;

// Comparison operators
console.log(`A > B is ${numberA > numberB}`);
console.log(`A < B is ${numberA < numberB}`);
console.log(`A >= B is ${numberA >= numberB}`);
console.log(`A <= B is ${numberA <= numberB}`);
console.log(`A == B is ${numberA == numberB}`);
console.log(`A != B is ${numberA != numberB}`);
console.log(`A === B is ${numberA === numberB}`);
console.log(`A !== B is ${numberA !== numberB}`);

// Logical operators
const conditionOne = false;
const conditionTwo = true;

console.log(`conditionOne && conditionTwo : ${conditionOne && conditionTwo}`);
console.log(`conditionOne || conditionTwo : ${conditionOne || conditionTwo}`);
console.log(`!conditionOne : ${!conditionOne}`);

//
//
//
//
//
//
//
//
/** 3. script that uses ternary operator to determine if a number is positive, negative or zero and logs the result */

const num = -10;

const result = num > 0 ? "positive" : num < 0 ? "negative" : "zero";
console.log(result);
