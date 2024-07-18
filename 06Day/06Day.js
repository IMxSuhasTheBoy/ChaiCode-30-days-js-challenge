// Activity 1: Array Creation and Access
// Task 1
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// Task 2
const firstEl = arr1[0];
const lastEl = arr1[arr1.length - 1];

console.log(firstEl);
console.log(lastEl);

// Activity 2: Array Methods (Basic)
// Task 3
arr1.push(6);
console.log(arr1);

// Task 4
arr1.pop();
console.log(arr1);

// Task 5
arr1.shift();
console.log(arr1);

// Task 6
arr1.unshift(0);

// Activity 3: Array Methods (Intermediate)

// Task 7
const doubledEleArr = arr1.map((el) => el * 2);
console.log(doubledEleArr);

// Task 8
const filterdEvenNumArr = arr1.filter((el) => el % 2 == 0);
console.log(filterdEvenNumArr);

// Task 9
const sumOfAllArrEl = arr1.reduce((sum, current) => sum + current, 0);
console.log(sumOfAllArrEl);

// Activity 4: Array Iteration
// Task 10
for (i = 0; i < arr1.length; i++) {
  console.log(`Log elements of arr1 using for loop: ${arr1[i]}`);
}

// Task 11
arr1.forEach((el) =>
  console.log(`Log elements of arr1 using forEach method: ${el}`)
);

// Activity 5: Multi-dimentional Arrays
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

console.log(multiDimentionalArr);

// Task 13
const eleFromMattrix = multiDimentionalArr[3][1];
console.log(eleFromMattrix);
