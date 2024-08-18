/** 1. script that declares variables of different data types and logs both the value and type of each variable to the console. */
let numberType = 10;
let stringType = "Hello World";
let booleanType = true;
const objectType = { name: "ai", age: 2 };
const arrayType = [3, 5];
let nullType = null;
let undefinedType = undefined;

const logVariableType = (variable: any, variableName: string) => {
  console.log(`${variableName} ${variable} has type ${typeof variable} `);
};

// logVariableType(numberType, "numberType");
// logVariableType(stringType, "stringType");
// logVariableType(booleanType, "booleanType");
// logVariableType(objectType, "objectType");
// logVariableType(arrayType, "arrayType");
// logVariableType(nullType, "nullType");
// logVariableType(undefinedType, "undefinedType");

//
//
//
//
//
//
//
//
/** 2. script to demonstrate the difference between let and const when it comes to reassignment */
// using let
let variableVal = "initial value";
// console.log(`variableVal initial value :  ${variableVal}`);

variableVal = "reassigned value";
// console.log(`variableVal reassigned value :  ${variableVal}`);

// using const
const constantVal = "initail value";
// console.log(`constantVal initial value : ${constantVal}`);

try {
  // constantVal = "reassigned value";
  // console.log(`constantVal reassigned value : ${constantVal}`);
} catch (error) {
  console.log(`Error : ${error.message}`);
}
