// Activity 1: Function Declaration
// Task 1
function isEvenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

const result1 = isEvenOrOdd(3);
console.log(result1); // Odd

// Task 2
function calcSquare(number) {
  return number * number;
}
const result2 = calcSquare(3);
console.log(result2);

// Activity 2: Function Expression
// Task 3
const determineMaxOfTwoNum = function (num1, num2) {
  if (num1 === num2) {
    return "Both numbers are equal";
  } else if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

const result3 = determineMaxOfTwoNum(2, 3);
console.log(result3);

///Task 4
const concatStr = function (str1, str2) {
  return str1 + str2;
};

const result4 = concatStr("Chai", "Code");
console.log(result4);

// Activity 3: Arrow Functions
// Task 5
const calcSum = (num1, num2) => num1 + num2;

const result5 = calcSum(2, 3);
console.log(result5);

// Task 6
const checkIsContainsChar = (str, char) => {
  if (str.indexOf(char) === -1) {
    return false;
  } else {
    return true;
  }
};

const result6 = checkIsContainsChar("ChaiCode", "s");
console.log(result6);

// Activity 4: Function Parameters and Default Values
// Task 7
const calcProduct = (num1, num2 = 2) => num1 * num2;

const result7 = calcProduct(5);
console.log(result7);

// Task 8
const greetPerson = (name, age = 18) =>
  `The person named ${name} is of age ${age} years.`;
const result8 = greetPerson("Chai");
console.log(result8);

// Activity 5: Higher-Order Functions
// Task 9
function callNtimesChildFn(childFn, num) {
  for (let i = 1; i <= num; i++) {
    childFn(i);
  }
}
function childFn(i) {
  console.log(`Called ${i} times!`);
}

callNtimesChildFn(childFn, 5);

// Task 10

function higherOrderFn(fn1, fn2, val) {
  const a = fn1(val);
  const b = fn2(a);

  console.log(
    `val is given to fn1 to be squared: ${a} and added to 10: ${b} using fn2`
  );
}

const childParam1 = (val) => val ** 2;
const childParam2 = (val) => val + 10;

higherOrderFn(childParam1, childParam2, 5);
