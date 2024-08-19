/** Activity 1: For Loop */
// Task 1
for (let i = 1; i <= 10; i++) {
  console.log(`1-10 Number: ${i}`);
}

//
//
//
//
//
//
//
//
// Task 2
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

//
//
//
//
//
//
//
//
/** Activity 2: While loop */
// Task 3
let whileLoopS = 0;
let whileloopN = 1;

while (whileloopN <= 10) {
  whileLoopS += whileloopN;
  whileloopN++;
}

console.log(`Sum of numbers from 1 to 10 is: ${whileLoopS}`);
// s+=n = res also n++ until n is less than or equal to 10
// 0+=1 = 1
// 1+=2 = 3
// 3+=3 = 6
// 6+=4 = 10
// 10+=5 = 15
// 15+=6 = 21
// 21+=7 = 28
// 28+=8 = 36
// 36+=9 = 45
// 45+=10 = 55
// 55+=11 = 66 but n 11 is not less than 10 so it will stop execution as per

//
//
//
//
//
//
//
//
// Task 4
let whileLoopNum = 10;
while (whileLoopNum >= 1) {
  console.log(`10-1 Number:${whileLoopNum}`);
  whileLoopNum--;
}

//
//
//
//
//
//
//
//
/** Activity 3: Do...While Loop */
// Task 5
let doWhileLoopNum = 1;
do {
  console.log(`1-5 Number: ${doWhileLoopNum}`);
  doWhileLoopNum++;
} while (doWhileLoopNum <= 5);

//
//
//
//
//
//
//
//
// Task 6
// function factorialWithDoWhile(num: number) {
//   if (num <= 1) return 1;

let num = 5;
let result = 1;

do {
  result *= num; // 5 20 60 120
  num--;
} while (num > 1); //4 3 2 1

//   return result;
// }

//                 1         5      
//value of num 5   result *= num    -->  result 5   without iteration
//value of num 4   result *= num    -->  result 20  iteration 1
//value of num 3   result *= num    -->  result 60  iteration 2
//value of num 2   result *= num    -->  result 120 iteration 3
//value of num 1   result *= num    -->  result 120 iteration 4  5th iteration will not execute
// console.log(`Factorial of 5 is: ${factorialWithDoWhile(5)}`);
console.log(`Factorial of 5 is: ${result}`);
//Note: solve with recursive function
function factorialWithRecursion(num: number): number {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorialWithRecursion(num - 1);
  }
  // In this recursive version, the factorial function calls itself with a smaller input (num - 1) until it reaches the base case (num <= 1).
}

//
//
//
//
//
//
//
//
/** Activity 4: Nested Loops */
// Task 7
console.log("// Task 7 pattern");
for (let loopA = 1; loopA <= 5; loopA++) {
  let str = "";
  for (let loopB = 1; loopB <= loopA; loopB++) {
    str += "*";
  }
  console.log(str); // executes 5 times
}
// iteration 1 str ""  B is 1    A is 1    str += A times "*"   log *
// iteration 2 str ""  B is 1-2  A is 2    str += A times "*"   log **
// iteration 3 str ""  B is 1-3  A is 3    str += A times "*"   log ***
// iteration 4 str ""  B is 1-4  A is 4    str += A times "*"   log ****
// iteration 5 str ""  B is 1-5  A is 5    str += A times "*"   log *****

//
//
//
//
//
//
//
//
/** Activity 5: Loop Control Statements */
// Task 8
console.log("// Task 8 continue keyword");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//
//
//
//
//
//
//
//
// Task 9
console.log("// Task 9 break keyword");
for (let i = 1; 1 <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
