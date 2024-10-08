/** Activity 1: If-else Statements */
// Task 1
function checkNumberSign(num: number) {
  if (num > 0) {
    console.log(`${num} is a positive Number.`);
  } else if (num < 0) {
    console.log(`${num} is a negative Number.`);
  } else {
    console.log(`${num} is a neutral Number.`);
  }
}

checkNumberSign(0); // neutral number
checkNumberSign(5); // positive number
checkNumberSign(-5); // negative number
checkNumberSign(Math.floor(Math.random() * 21) - 10);

//
//
//
//
//
//
//
//
// Task 2
const age = Math.floor(Math.random() * 100 + 1);
if (age >= 18) {
  console.log(`age ${age} is Eligible to vote.`);
} else {
  console.log(`age ${age} is Not eligible to vote.`);
}

//
//
//
//
//
//
//
//
/** Activity 2: Nested If-else Statements */
//Task 3
const numB = Math.floor(Math.random() * 10 + 1);
const numC = Math.floor(Math.random() * 10 + 1);
const numD = Math.floor(Math.random() * 10 + 1);
console.log(numB, numC, numD);

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

//
//
//
//
//
//
//
//
/** Activity 3: Switch Case */
//Task 4
const weekdayNumber = Math.floor(Math.random() * 8 + 1);
let day: string;
switch (weekdayNumber) {
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
console.log(`${weekdayNumber} ${day}`);

//
//
//
//
//
//
//
//
//Task 5
function _getGrade(score: number) {
  let grade: string;
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
  console.log(`${score} - ${grade}`);
}

_getGrade(Math.floor(Math.random() * 120 + 1));

//
//
//
//
//
//
//
//
/** Activity 4: (Conditional) Ternary Operator */
// Task 6
const numE = Math.floor(Math.random() * 10);
const evenOrOddResult =
  numE % 2 == 0 && numE !== 0 ? "Even" : numE === 0 ? "Neutral" : "Odd";
console.log(`${numE} is ${evenOrOddResult}`);

//
//
//
//
//
//
//
//
/** Activity 5: Combining Conditions */
// Task 7
// const year = 2028;
const year = Math.floor(Math.random() * (3000 - 2000 + 1) + 2000);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

/**
 * Task 7: code will generate a random year between 2000 and 3000 (inclusive).

Here's a breakdown of how it works:

* `Math.random()` generates a random number between 0 (inclusive) and 1 (exclusive).

* Multiplying this number by `(3000 - 2000 + 1)` scales the range to between 0 and 1001 (inclusive).

* Adding `2000` shifts the range to between 2000 and 3001 (inclusive).

* `Math.floor()` rounds down to the nearest integer, so the final range is between 2000 and 3000 (inclusive).

So, the possible values generated by this code are: 2000, 2001, 2002, ..., 2999, 3000.
 */
