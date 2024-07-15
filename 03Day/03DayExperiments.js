// Activity 2:
//Task 3
const numB = 10;
const numC = 5;
const numD = 100; // correct c-d

// const numB = 10;
// const numC = 100; // correct b-d
// const numD = 5;

// const numB = 100; // correct c-d
// const numC = 5;
// const numD = 10;

// const numB = 110; // correct
// const numC = 110; // correct
// const numD = 11;

// const numB = 11;
// const numC = 110; // correct
// const numD = 110; // correct

// const numB = 110; // correct
// const numC = 11;
// const numD = 110; // correct

// own brute force logic
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

// codium logic 1
if (numB === numC && numC === numD) {
  console.log("All numbers are equal");
} else if (numB > numC && numB > numD) {
  console.log("B");
} else if (numC > numB && numC > numD) {
  console.log("C");
} else if (numD > numB && numD > numC) {
  console.log("D");
} else if (numB === numD) {
  console.log("B and D");
} else if (numC > numD) {
  console.log("C and B");
} else {
  console.log("C and D");
}
// codium logic 2
const numbers = [numB, numC, numD];
const maxNumber = Math.max(...numbers);
const countMax = numbers.filter((num) => num === maxNumber).length;

if (countMax === 3) {
  console.log("All numbers are equal");
} else if (countMax === 1) {
  console.log(maxNumber === numB ? "B" : maxNumber === numC ? "C" : "D");
} else if (countMax === 2) {
  console.log(numB === numD ? "B and D" : numC > numD ? "C and B" : "C and D");
}
