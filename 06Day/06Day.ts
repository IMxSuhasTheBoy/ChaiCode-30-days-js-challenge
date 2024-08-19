/** Activity 1: Array Creation and Access */
// Task 1
const arrOfNum = [1, 2, 3, 4, 5];
console.log(`Created array: ${arrOfNum}`);

//
//
//
//
//
//
//
//
// Task 2
const firstElFromArrOfNum = arrOfNum[0];
const lastElFromArrOfNum = arrOfNum[arrOfNum.length - 1];

console.log(`${firstElFromArrOfNum} - is the first element in arrOfNum.`);
console.log(`${lastElFromArrOfNum} - is the last element in arrOfNum.`);

//
//
//
//
//
//
//
//
/** Activity 2: Array Methods (Basic) */
// Task 3
console.log(arrOfNum.length);
console.log(arrOfNum.push(7));
arrOfNum.push(67);
console.log(`${arrOfNum} array elements after an element is added using push.`);

//
//
//
//
//
//
//
//
// Task 4
arrOfNum.pop();
console.log(`${arrOfNum} array elements after pop method is used.`);

//
//
//
//
//
//
//
//
// Task 5
arrOfNum.shift();
console.log(`${arrOfNum} array elements after shift method is used.`);

//
//
//
//
//
//
//
//
// Task 6
arrOfNum.unshift(0);
console.log(
  `${arrOfNum} array elements after an element is added using unshift.`
);

//
//
//
//
//
//
//
//
/** Activity 3: Array Methods (Intermediate) */
// Task 7
const doubledEleArr = arrOfNum.map((el) => el * 2);
console.log(
  `${doubledEleArr} new array is created with values multiplied by 2.`
);

//
//
//
//
//
//
//
//
// Task 8
const filterdEvenNumArr = arrOfNum.filter((el) => el % 2 == 0 && el !== 0);
console.log(
  `${filterdEvenNumArr} - new array is created with only even numbers.`
);

//
//
//
//
//
//
//
//
// Task 9
const sumOfAllArrEl = arrOfNum.reduce((sum, current) => sum + current, 0);
console.log(`${sumOfAllArrEl} - returned number is sum of all array elements.`);

//
//
//
//
//
//
//
//
/** Activity 4: Array Iteration */
// Task 10
for (let i = 0; i < arrOfNum.length; i++) {
  console.log(
    `At Index ${i} - ${arrOfNum[i]} :Log elements of arrOfNum using for loop.`
  );
}

//
//
//
//
//
//
//
//
// Task 11
arrOfNum.forEach((el, idx) =>
  console.log(
    `At index ${idx} - ${el} :Log elements of arrOfNum using forEach method.`
  )
);

//
//
//
//
//
//
//
//
/** Activity 5: Multi-dimentional Arrays */
// Task 12
const multiDimentionalArr = [
  [1, 2, 3],
  ["a", "b", "c"],
  [true, false, true],
  [
    { a: 10, b: 100, c: 1000 },
    { d: 20, f: 200, g: 2000 },
    { h: 30, i: 300, j: 3000 },
  ],
];
console.log(`Array with arrays as elements\n${multiDimentionalArr}`);

//
//
//
//
//
//
//
//
// Task 13
console.table(multiDimentionalArr);

const eleFromMattrix = multiDimentionalArr[3][1];
console.log(eleFromMattrix);
