// Activity 1: Variables declarations
// Task 1
var dayCount;
dayCount = 1;
console.log(dayCount);

// Task 2
let taskName;
taskName = "Variables and Data Types";
console.log(taskName);

// Activity 2: Const Declaration
const isLoggedIn = true;
console.log(isLoggedIn);

// Activity 3: Data Types
const favoriteNumber = 67;
console.log(typeof favoriteNumber);

let username = "IMxSuhasTheBoy";
console.log(typeof username);

let isVerified = true;
console.log(typeof isVerified);

let loginCredentials = {
  username: "skDoDesign",
  email: "communicate.suhas@gmail.com",
  password: "strongpassword",
};
console.log(typeof loginCredentials);

let componentLibraries = [
  "https://ui.aceternity.com/",
  "https://ui.shadcn.com/",
];
console.log(typeof componentLibraries);

// Activity 4: Reassigning Variables
let initailValue = "initail value";
console.log(initailValue);
initailValue = "new value assigned";
console.log(initailValue);

// Activity 5: Understanding const
const constantInitialValue = "initial value";
console.log(constantInitialValue);

try {
  constantInitialValue = "new value assigned";
} catch (error) {
  console.log(`Error : ${error.message}`); //! TypeError : Assignment to constant variable
}
