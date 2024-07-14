// Activity 1: Arithmetic Operators
// Task 1
const numA = 6;
const numB = 4;

const sumResult = numA + numB;
console.log(sumResult);

// Task 2
const difference = numA - numB;
console.log(difference);

//Task 3
const product = numA * numB;
console.log(product);

//Task 4
const quotient = numA / numB;
console.log(quotient);

//Task 5
const remainder = numA % numB;
console.log(remainder);

// Activity 2: Assignment operators
// Task 6
let a = 5;
a += 6;
console.log(a);

// Task 7
let b = 5;
b -= 3;
console.log(b);

// Activity 3: Comparison operators
// Task 8
console.log(`${numA} > ${numB} : ${numA > numB}`);
console.log(`${numA} < ${numB} : ${numA < numB}`);

// Task 9
console.log(`${numA} >= ${numB} : ${numA >= numB}`);
console.log(`${numA} <= ${numB} : ${numA <= numB}`);

// Task 10
const numC = 5;
const numD = "5";
console.log(`${numC} == ${numD} : ${numC == numD}`);
console.log(`${numC} === ${numD} : ${numC === numD}`);

// Activity 4: Logical operators
// Task 11
const conditionA = true;
const conditionB = false;

const andResult = conditionA && conditionB;
console.log(`&& result: ${andResult}`);

// Task 12
const orResult = conditionA || conditionB;
console.log(`|| result: ${orResult}`);

// Task 13
const notResult = !conditionA;
console.log(`! result: ${notResult}`);

// Activity 5: Ternary operator
// Task 14
const numE = -1;
const determineSignOfNumber =
  numE > 0
    ? `Num: ${numE} is positive`
    : numE < 0
    ? `Num: ${numE} is negative`
    : `Num: ${numE} is zero`;

console.log(determineSignOfNumber);
