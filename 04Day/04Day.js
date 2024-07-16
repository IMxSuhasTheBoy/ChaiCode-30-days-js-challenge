// Activity 1:  For Loop
// Task 1
// for (i = 1; i <= 10; i++) {
//   console.log(`Number: ${i}`);
// }

// Task 2
// for (i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }

// Activity 2: While loop
// Task 3
sum = 0;
num = 1;

while (num <= 10) {
  sum += num;
  num++;
}

console.log(`Sum of numbers from 1 to 10 is: ${sum}`);
// 0+1+2+3+4+5+6+7+8+9+10

// Task 4
// let j = 10;
// while (j >= 1) {
//   console.log(j);
//   j--;
// }

// Activity 3: Do...While Loop
// Task 5
let number = 1;
do {
  console.log(number);
  number++;
} while (number <= 5);

// Task 6
function factorial(num) {
  let result = 1;

  do {
    result *= num; // 5 20 60 120
    num--;
  } while (num > 1); //4 3 2 1

  return result;
}

//                 result is 1
//value of num 5   result *= num    -->  result 5
//value of num 4   result *= num    -->  result 20
//value of num 3   result *= num    -->  result 60
//value of num 2   result *= num    -->  result 120
//value of num 1   result *= num    -->  result 120
console.log(factorial(5));

// Activity 4: Nested Loops
// Task 7
for (loopA = 1; loopA <= 5; loopA++) {
  let str = "";
  for (loopB = 1; loopB <= loopA; loopB++) {
    str += "*";
  }
  console.log(str); // executes 5 times
}
// iteration 1 str ""  B is 1    A is 1    str += A times "*"   log *
// iteration 2 str ""  B is 1-2  A is 2    str += A times "*"   log **
// iteration 3 str ""  B is 1-3  A is 3    str += A times "*"   log ***
// iteration 4 str ""  B is 1-4  A is 4    str += A times "*"   log ****
// iteration 5 str ""  B is 1-5  A is 5    str += A times "*"   log *****

// Activity 5: Loop Control Statements
// Task 8
for (i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task 9
for (i = 1; 1 <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
