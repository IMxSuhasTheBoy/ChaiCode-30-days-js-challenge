/** Activity 1: Variables declarations */
// Task 1
var dayCount: number;
dayCount = 1;
// console.log(dayCount);

//
//
//
//
//
//
//
//
// Task 2
let taskName: string;
taskName = "Variables and Data Types";
// console.log(taskName);

//
//
//
//
//
//
//
//
/** Activity 2: Const Declaration */
// Task 3
const isLoggedIn = true;
// console.log(isLoggedIn);

//
//
//
//
//
//
//
//
/** Activity 3: Data Types */
// Task 4
const favoriteNumber = 67;
// console.log(typeof favoriteNumber);

let username = "IMxSuhasTheBoy";
// console.log(typeof username);

let isVerified = true;
// console.log(typeof isVerified);

const loginCredentials = {
  username: "skDoDesign",
  email: "communicate.suhas@gmail.com",
  password: "strongpassword",
};
// console.log(typeof loginCredentials);

const componentLibraries: string[] = [
  "https://ui.aceternity.com/",
  "https://ui.shadcn.com/",
  "https://ui.radix-ui.com/",
];
// console.log(typeof componentLibraries);

//
//
//
//
//
//
//
//
/** Activity 4: Reassigning Variables */
// Task 5
let variableValue = "initial value";
// console.log(variableValue);
variableValue = "assigned new value";
// console.log(variableValue);

//
//
//
//
//
//
//
//
/** Activity 5: Understanding const */
// Task 6
const constantValue = "initial value";
// console.log(constantValue);

try {
  // constantValue = "assigned new value";
} catch (error) {
  console.log(`Error : ${error.message}`); //! TypeError : Assignment to constant variable
}
