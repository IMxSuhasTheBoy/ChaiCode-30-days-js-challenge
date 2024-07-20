// Activity 1: Template literals
// Task 1
const name = "IMxSuhasTheBoy";
const age = 21;
const modernString1 = `Person's name: ${name}, Age: ${age}.`;
console.log(modernString1);

// Task 2
const modernString2 = `Person's name: ${name},\nAge ${age}`;
console.log(modernString2);

// Activity 2: Destructuring
// Task 3
const numbersArray = [5, 15, 25];
const [firstEl, secondEl] = numbersArray;
console.log(firstEl);
console.log(secondEl);

// Task 4
const book = {
  title: "Why reactjs?",
  author: "IMxSuhasTheBoy",
  year: "2016",
};

const { title, author } = book;
console.log(title);
console.log(author);

// Activity 3 Spread and Rest Operatots
// Task 5
const newArr = ["ImNew1", true, ...numbersArray, "ImNew2", true];
console.log(newArr);

// Task 6
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

const sumResult = sum(2, 5, 3);
console.log(sumResult);

// Activity 4: Default Parameters
// Task 7
function product(num1, num2 = 1) {
  return num1 * num2;
}
const productResult1 = product(3);
const productResult2 = product(3, 6);
console.log(productResult1);
console.log(productResult2);

// Activitiy 5: Enhanced Object Literals
// Task 8
let username = "Alice";
let otp = 4080;

let sendOtp = {
  username,
  otp,
  sendOtp() {
    return `Hey! For ${this.username} here's the otp: ${this.otp} to register*.`;
  },
};

console.log(sendOtp.sendOtp());

// Task 9
const randomNum1 = Math.floor(Math.random() * 10 + 1);
const randomNum2 = Math.floor(Math.random() * 100 + 1);

const objWithComputedProps = {
  randomNumProp1: randomNum1,
  randomNumProp2: randomNum2,
};

console.log(objWithComputedProps);
