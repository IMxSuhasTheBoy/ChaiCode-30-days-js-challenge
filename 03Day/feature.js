//* 1. script that checks if a number is positive, negative or zero using if-else statements and logs the result.
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

//* 2. script to check if a person is eligible to vote based on their age and log the result.

function checkEligibily(age) {
  if (age >= 18) {
    console.log(`Eligible to vote.`);
  } else {
    console.log(`Not eligible to vote.`);
  }
}

checkEligibily(15); // Not eligible to vote.
checkEligibily(20); // Eligible to vote.

//* 3. script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.

function getDayOfTheWeek(dayNumber) {
  let day;
  switch (dayNumber) {
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
}

getDayOfTheWeek(3); // Tuesday
getDayOfTheWeek(8); // Invalid day

//* 4. script that uses a switch case to assign a grade based on a score and logs the grade.

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

getGrade(87); // A
getGrade(70); // B
getGrade(50); // F
getGrade(101); // Invalid score
getGrade(0); // F

//* 5. script to chack if a year is leap year using multiple conditions and log the result.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}

isLeapYear(2023); // 2023 is not a leap year
isLeapYear(2020); // 2020 is a leap year
isLeapYear(2028); // 2028 is a leap year
