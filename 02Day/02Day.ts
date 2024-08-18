/** Activity 1: Arithmetic Operators */
// Task 1
const _numA = 6;
const _numB = 4;

const sumResult = _numA + _numB;
// console.log(`Addition operator result: ${_numA} + ${_numB} = ${sumResult}`);

//
//
//
//
//
//
//
//
// Task 2
const difference = _numA - _numB;
// console.log(`Subtraction operator result: ${_numA} - ${_numB} = ${difference}`);

//
//
//
//
//
//
//
//
//Task 3
const product = _numA * _numB;
// console.log(`Multiplication operator result: ${_numA} * ${_numB} = ${product}`);

//
//
//
//
//
//
//
//
//Task 4
const quotient = _numA / _numB;
// console.log(`Task 4 Division operator result: ${_numA} / ${_numB} = ${quotient}`);

//
//
//
//
//
//
//
//
//Task 5
const remainder = _numA % _numB;
// console.log(`Remainder operator result: ${_numA} % ${_numB} = ${remainder}`);

//
//
//
//
//
//
//
//
/** Activity 2: Assignment operators (modify-and-assign in place) */
// Task 6
let shortHandAdd = 5;
shortHandAdd += 6;
// console.log(shortHandAdd);

//
//
//
//
//
//
//
//
// Task 7
let shortHandSub = 5;
shortHandSub -= 3;
// console.log(shortHandSub);

//
//
//
//
//
//
//
//
/** Activity 3: Comparison operators */
// Task 8
console.log(`${_numA} > ${_numB} is ${_numA > _numB}`);
console.log(`${_numA} < ${_numB} is ${_numA < _numB}`);

//
//
//
//
//
//
//
//
// Task 9
console.log(`${_numA} >= ${_numB} is ${_numA >= _numB}`);
console.log(`${_numA} <= ${_numB} is ${_numA <= _numB}`);

//
//
//
//
//
//
//
//
// Task 10
const _numC = 5;
const _numD = "5";
console.log(`${_numC} == ${_numD} is ${_numC == _numD}`);
console.log(`${_numC} === ${_numD} is ${_numC === _numD}`);

//
//
//
//
//
//
//
//
/** Activity 4: Logical operators */
// Task 11
const conditionA = true;
const conditionB = false;

const andResult = conditionA && conditionB;
// console.log(`&& results: ${andResult}`);

//
//
//
//
//
//
//
//
// Task 12
const orResult = conditionA || conditionB;
// console.log(`|| results: ${orResult}`);

//
//
//
//
//
//
//
//
// Task 13
const notResult = !conditionA;
// console.log(`! results: ${notResult}`);

//
//
//
//
//
//
//
//
/** Activity 5: Ternary operator */
// Task 14
const randomNum = Math.floor(Math.random() * 21) - 10; // -10 to 10
const determineSignOf_Number =
  randomNum > 0
    ? `Num: ${randomNum} is positive`
    : randomNum < 0
    ? `Num: ${randomNum} is negative`
    : `Num: ${randomNum} is zero`;

// console.log(determineSignOf_Number);

function random_Number(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
