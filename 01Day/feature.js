//* 1. script that declares variables of different data types and logs both the value and type of each variable to the console.

const numberType = 10;
const stringType = "Hello World";
const booleanType = true;
const objectType = {};
const arrayType = [];
const nullType = null;
const undefinedType = undefined;

const logVariableType = (variable, variableNames) => {
  console.log(`${variableNames} ${variable} has type ${typeof variable} `);
};

logVariableType(numberType, "numberType");
logVariableType(stringType, "stringType");
logVariableType(booleanType, "booleanType");
logVariableType(objectType, "objectType");
logVariableType(arrayType, "arrayType");
logVariableType(nullType, "nullType");
logVariableType(undefinedType, "undefinedType");

//* 2. script to demonstrate the difference between let and const when it comes to reassignment

// using let declaration
let a = "initail value";
console.log(`initail value a :  ${a}`);

a = "reassigned value";
console.log(`reassigned value a :  ${a}`);

// using const declaration
const b = "initail value";
console.log(`initail value b :  ${b}`);

try {
  b = "reassigned value";
  console.log(`reassigned value b: ${b}`);
} catch (error) {
  console.log(`Error : ${error.message}`);
}
