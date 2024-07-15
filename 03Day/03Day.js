// Activity 1: If-else Statements
// Task 1
function checkNumber(num) {
  if (num > 0) {
    console.log(`${num} is a positive Number.`);
  } else if (num < 0) {
    console.log(`${num} is a negative Number.`);
  } else {
    console.log(`${num} is a neutral Number.`);
  }
}

checkNumber(0); // neutral number
checkNumber(5); // positive number
checkNumber(-5); // negative number

// Task 2
const age = 7;
if (age >= 18) {
  console.log(`Eligible to vote.`);
} else {
  console.log(`Not eligible to vote.`);
}

// Activity 2: Nested If-else Statements
//Task 3
const numB = 10;
const numC = 5;
const numD = 100;

if (numB === numC && numC === numD) {
  console.log("All numbers are equal");
} else if (numB > numC) {
  if (numB === numD) {
    console.log("B and D");
  } else if (numB > numD) {
    console.log("B");
  } else {
    console.log("D");
  }
} else if (numC === numB) {
  if (numC > numD) {
    console.log("C and B");
  } else {
    console.log("D");
  }
} else if (numC > numB) {
  if (numC === numD) {
    console.log("C and D");
  } else if (numC > numD) {
    console.log("C");
  } else {
    console.log("D");
  }
}

// Activity 3: Switch Case
//Task 4
const number = 3;
let day;
switch (number) {
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Monday";
    break;
  case 3:
    day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
  case 5:
    day = "Thursday";
    break;
  case 6:
    day = "Friday";
    break;
  case 7:
    day = "Saturday";
    break;
  default:
    day = "Invalid day";
}
console.log(day);

//Task 5
function getGrade(score) {
  let grade;
  switch (true) {
    case score > 100:
      grade = "Invalid score";
      break;
    case score >= 90:
      grade = "A";
      break;
    case score >= 70:
      grade = "B";
      break;
    case score >= 60:
      grade = "C";
      break;
    case score >= 40:
      grade = "D";
      break;
    case score < 40:
      grade = "F";
      break;
    default:
      grade = "Invalid score";
  }
  console.log(grade);
}

getGrade(12);

// Activity 4: (Conditional) Ternary Operator
// Task 6
const numE = 0;
const result = numE > 0 ? "Even" : numE === 0 ? "Zero" : "Odd";
console.log(result);

//Activity 5: Combining Conditions
// Task 7
const year = 2028;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year);
}
