/** Activity 1: Template literals */
// Task 1
const userName = "IMxSuhasTheBoy";
const userAge = 21;
console.log(
  `Person's name: ${userName}, Age: ${userAge}. string interpolation`
);

//
//
//
//
//
//
//
//
// Task 2
console.log(
  `Person's name: ${userName},\nAge ${userAge} multiline string interpolation`
);

//
//
//
//
//
//
//
//
/** Activity 2: Destructuring */
// Task 3
const numbersArray = [5, 15, 25];
const [firstEl, secondEl] = numbersArray;
console.log(numbersArray, "Destructuring of Array elements:");
console.log(firstEl);
console.log(secondEl);

//
//
//
//
//
//
//
//
// Task 4
const _book = {
  _title: "Why reactjs?",
  _author: "IMxSuhasTheBoy",
  year: "2016",
};

const { _title, _author } = _book;
console.log("Destructuring of Object properties:");
console.log(`Title: ${_title} Author: ${_author}`);

//
//
//
//
//
//
//
//
/** Activity 3 Spread and Rest Operatots */
// Task 5
console.log(["ImNew1", true, ...numbersArray, "ImNew2", true]);

//
//
//
//
//
//
//
//
// Task 6
function sumWithRestOperator(...numbers: number[]) {
  let sum = 0;

  numbers.forEach((num) => (sum += num));

  return sum;
  // return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumWithRestOperator(2, 5, 3));

//
//
//
//
//
//
//
//
/** Activity 4: Default Parameters */
// Task 7
function returnProduct(num1: number, num2: number = 1) {
  return num1 * num2;
}

console.log(returnProduct(3));
console.log(returnProduct(3, 6));

//
//
//
//
//
//
//
//
/** Activitiy 5: Enhanced Object Literals */
// Task 8

const sendOtp = function () {
  return `Hey! For ${this.username} here's the otp: ${this.otp} to register*.`;
};

interface SendOtpObj {
  username: string;
  otp: number;
  sendOtp: () => string;
}

let sendOtpObj: SendOtpObj = {
  username: "Alice",
  otp: 1234,
  sendOtp,
};

sendOtpObj["sendOtp"] = sendOtp;

console.log(sendOtpObj);

console.log(sendOtpObj["username"]);

console.log(sendOtpObj["sendOtp"]());

//
//
//
//
//
//
//
//
// Task 9
const randomNum1ForProp = Math.floor(Math.random() * 10 + 1);
const randomNum2ForProp = Math.floor(Math.random() * 100 + 1);

const objWithComputedProps = {};

objWithComputedProps["randomNumFunc1"] = randomNum1ForProp;
objWithComputedProps["randomNumFunc2"] = randomNum2ForProp;

console.log(objWithComputedProps);

console.log(
  objWithComputedProps["randomNumFunc1"] +
    objWithComputedProps["randomNumFunc2"]
);
