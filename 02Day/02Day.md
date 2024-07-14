# Day 2: js operators

## Table of contents

1. [Activity 1: Arithmetic operations](#activity-1-arithmetic-operations)

   - Task 1 : Addition

   - Task 2 : Subtraction

   - Task 3 : Multiplication

   - Task 4 : Division

   - Task 5 : Remainder

2. [Activity 2: Assignment operators](#activity-2-assignment-operators)

   - Task 6 : `+=` Operator

   - Task 7 : `-=` Operator

3. [Activity 3: Comparison operators](#activity-3-comparison-operators)

   - Task 8 : `>` and `<` Operators

   - Task 9 : `>=` and `<=` Operators

   - Task 10 : `==` and `===` Operators

4. [Activity 4: Logical operators](#activity-4-logical-operators)

   - Task 11 : `&&` Operator

   - Task 12 : `||` Operator

   - Task 13 : `!` Operator

5. [Activity 5: Ternary operator](#activity-5-ternary-operator)

   - Task 14 : Ternary Operator

6. [Feature script:](#feature-script)

## Activity 1: Arithmetic operations

**Task 1:** Write a program to add two numbers and log the result to the console.

```javascript
const a = 6;
const b = 7;
const result = a + b;
console.log("Sum: ", result); // Sum: 13
```

**Task 2:** Write a program to subtract two numbers and log the result to the console.

```javascript
const a = 10;
const b = 7;
const result = a - b;
console.log("Difference: ", result); // Difference: 3
```

**Task 3:** Write a program to multiply two numbers and log the result to the console.

```javascript
const a = 5;
const b = 6;
const result = a * b;
console.log("Product: ", result); // Product: 30
```

**Task 4:** Write a program to divide two numbers and log the result to the console.

```javascript
const a = 10;
const b = 2;
const result = a / b;
console.log("Quotient: ", result); // Quotient: 5
```

**Task 5:** Write a program to find the remainder when one number is divided by another and log the result to the console.

```javascript
const a = 10;
const b = 3;
const result = a % b;
console.log("Remainder: ", result); // Remainder: 1;
```

## Activity 2. Assignment operators

**Task 6:** Use the `+=` operator to add a number to a variable and log the result to the console.

```javascript
let a = 10;
a += 5;
console.log("a: ", a); // a: 15
```

**Task 7:** Use the `-=` operator to subtract a number from a variable and log the result to the console.

```javascript
let a = 10;
a -= 5;
console.log("a: ", a); // a: 5
```

## Activity 3. Comparison operators

**Task 8:** Write a program to compare two numbers using `>` and `<` and log the result to the console.

```javascript
const a = 10;
const b = 5;
console.log("a > b: ", a > b); // a > b: true
console.log("a < b: ", a < b); // a < b: false
```

**Task 9:** Write a program to compare two numbers using `>=` and `<=` and log the result to the console.

```javascript
const a = 10;
const b = 5;
console.log("a >= b: ", a >= b); // a >= b: true
console.log("a <= b: ", a <= b); // a <= b: false
```

**Task 10:** Write a program to compare two numbers using `==` and `===` and log the result to the console.

```javascript
const a = 5;
const b = "5";
console.log("a == b: ", a == b); // a == b: true
console.log("a === b: ", a === b); // a === b: false
```

## Activity 4. Logical operators

**Task 11:** Write a program to that uses `&&` operator to combine two conditions and log the result to the console.

```javascript
const a = true;
const b = false;
console.log("a && b : ", a && b); // a && b: true
```

**Task 12:** Write a program to that uses `||` operator to combine two conditions and log the result to the console.

```javascript
const a = true;
const b = false;
console.log("a || b : ", a || b); // a || b: true
```

**Task 13:** Write a program to that uses `!` operator to negate a condition and log the result to the console.

```javascript
const a = true;
console.log("!a : ", !a); // !a: false
```

## Activity 5. Ternary operator

**Task 14:** Write a program to that uses a ternary operator to check if a number is positive or negative and log the result to the console.

```javascript
const num = -10;

const result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(`The number is ${result}`); // The number is Negative
```

## Feature script

### 1. Arithmetic Operations Script

Write a script that performs basic arithmetic operations on two numbers and logs the results to the console.

```javascript
const num1 = 14;
const num2 = 6;

// Addition
const sum = num1 + num2;
console.log("Sum: ", sum); // Sum: 20

// Subtraction
const subtraction = num1 - num2;
console.log("Subtraction: ", subtraction); // Subtraction: 8

// Multiplication
const multiplication = num1 * num2;
console.log("Multiplication: ", multiplication); // Multiplication: 84

// Division
const division = num1 / num2;
console.log("Division: ", division); // Division: 2.2

// Remainder
const remainder = num1 % num2;
console.log("Remainder: ", remainder); // Remainder: 2
```

### 2. Compairison and Logical Operator Script

Create a Script that compares two numbers using different comparison operators and combines conditions using logican operrators, logging the results.

```javascript
const a = 10;
const b = 5;

console.log(`a > b : ${a > b}`); // a > b : true
console.log(`a < b : ${a < b}`); // a < b : false
console.log(`a >= b : ${a >= b}`); // a >= b : true
console.log(`a <= b : ${a <= b}`); // a <= b : false
console.log(`a == b : ${a == b}`); // a == b : false
console.log(`a === b : ${a === b}`); // a === b : false

const conditionA = false;
const conditionB = true;

console.log(`conditionA && conditionB : ${conditionA && conditionB}`); // conditionA && conditionB : false
console.log(`conditionA || conditionB : ${conditionA || conditionB}`); // conditionA || conditionB : true
console.log(`!conditionA : ${!conditionA}`); // !conditionA : true
```

### 3. Ternary Operator Script

Write a script that uses a ternary operator to determine if a number is positive or negative and log the result to the console.

```javascript
const num = -10;

const result = num > 0 ? "positive" : num < 0 ? "negative" : "zero";
console.log(`The number is ${result}`); // The number is negative
```
