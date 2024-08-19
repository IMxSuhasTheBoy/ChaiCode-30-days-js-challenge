/** Activity 1: Function Declaration */
// Task 1
function checkIsNumEvenOrOdd(n: number) {
  if (n === 0) console.log("Number is Zero");

  if (n % 2 === 0) {
    console.log(`Number ${n} is Even`);
  } else {
    console.log(`Number ${n} is Odd`);
  }
}

checkIsNumEvenOrOdd(5);

//
//
//
//
//
//
//
//
// Task 2
function calcSquare(number: number) {
  return `Square of ${number} is ${number * number}`;
  // console.log(`Square of ${number} is ${Math.pow(number, 2)}`);
}

console.log(calcSquare(3));

//
//
//
//
//
//
//
//
/** Activity 2: Function Expression */
// Task 3
const determineMaxFromTwoNum = function (num1: number, num2: number) {
  console.log(`num1: ${num1}, num2: ${num2}`);

  if (num1 === num2) {
    console.log("Both numbers are equal");
  } else if (num1 > num2) {
    console.log(`Number: ${num1} is greater than ${num2}`);
  } else {
    console.log(`Number: ${num2} is greater than ${num1}`);
  }

  return Math.max(num1, num2);
};

const determineMaxFromTwoNumResult = determineMaxFromTwoNum(
  Math.floor(Math.random() * 11),
  Math.floor(Math.random() * 11)
);

console.log(determineMaxFromTwoNumResult);

//
//
//
//
//
//
//
//
// Task 4
const concatStr = function (str1: string, str2: string) {
  return str1 + str2;

  // return str1.concat(str2);
};

console.log(concatStr("Chai", "Code.com"));

//
//
//
//
//
//
//
//
/** Activity 3: Arrow Functions */
// Task 5
const calcSum = (num1: number, num2: number) => {
  return `Sum of ${num1} and ${num2} is ${num1 + num2}`;
};

const calcSumResult = calcSum(
  Math.floor(Math.random() * 11),
  Math.floor(Math.random() * 11)
);

console.log(calcSumResult);

//
//
//
//
//
//
//
//
// Task 6
const checkIsStringContainsChar = (str: string, char: string) => {
  if (str.indexOf(char) === -1) {
    return false;
  } else {
    return true;
  }

  /*
     for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    } else {
      return false;
    }
  }
   */
  // return str.includes(char);
  // return str.split(char).length > 1
  // return new RegExp(char).test(str);
};

const checkIsStringContainsCharResult = checkIsStringContainsChar(
  "ChaiCode",
  "s"
);

console.log(
  `Result of is contains char in given string is: ${checkIsStringContainsCharResult}`
);

//
//
//
//
//
//
//
//
/** Activity 4: Function Parameters and Default Values */
// Task 7
const calcProduct = (num1: number, num2: number = 2) => num1 * num2;

console.log(calcProduct(50));

//
//
//
//
//
//
//
//
// Task 8
function greetPerson(name: string, age: number = 18) {
  return `The person named ${name} is of age ${age} years.`;
}

const greetPersonResult = greetPerson("Chai");

console.log(greetPersonResult);

//
//
//
//
//
//
//
//
/** Activity 5: Higher-Order Functions */
// Task 9
function callNtimesChildFn(childFn: Function, num: number) {
  for (let i = 1; i <= num; i++) {
    childFn(i);
  }
}
function childFn(i: number) {
  console.log(`Called ${i} times!`);
}

callNtimesChildFn(childFn, 4);

//
//
//
//
//
//
//
//
// Task 10
function higherOrderFn(
  fn1: (val: number) => number,
  fn2: (val: number) => number,
  val: number
) {
  const a = fn1(val);
  const b = fn2(a);

  console.log(
    `val is passesed to fn1 to be squared: ${a} and added to 10: ${b} using fn2`
  );
}

const childParam1 = (val: number) => val ** 2;
const childParam2 = (val: number) => val + 10;

higherOrderFn(childParam1, childParam2, 5);

/*
  (val: number) => number
  (val: number) => number
*/
