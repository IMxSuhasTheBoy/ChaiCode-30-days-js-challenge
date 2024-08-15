// the type of a variable is inferred based on the type of its initializer:
let testNumber0; // implicit type annotation

let testNumber1: number;

let testNumber2 = 10;

let testNumber3: number = 11; // explicit type annotation not required when initializer is present

/**
 * @returns number
 */
function testNumber4(): number {
  return 67;
}
// testNumber4(). // methods for only number type are accessible

let testArray0 = [3, 2, "array"];

let testTuppleArray0: [number, number, string] = [1, 2, "tupple"];

let testAny0: any;

testAny0 = 67;
testAny0 = "slap any thing on him-!";

function testNever0(): never {
  while (1 === 1) {
    console.log("im never gona return any-thing-!");
  }
  throw new Error("this fn will never return");
}
// testNever0();

function testVoid0(): void {
  console.log("hey just a logging, nothing-else-!");
}
// testVoid0(). // nothing-lol!

const testEnum0 = {
  east: "East",
  west: "West",
  north: "North",
  south: "South",
  randomDirection: "Random direction",
};
// testEnum0.

let testUnion0: string | null;

testUnion0 = null;
testUnion0 = "string";

let testUnion1: number | string;
// testUnion1.

const testUnion2: number | boolean = true;
// testUnion2.

function testUnion3(testUnion3: string | number) {
  if (typeof testUnion3 === "string") {
    // testUnion3.
  } else if (typeof testUnion3 === "number") {
    // testUnion3.
  }
}
testUnion3(67);
testUnion3("string");

type testUnionLiterals0 = "open" | "close" | "minimize" | "maximize";
const _: testUnionLiterals0 = "close";

type testType0 = {
  division: string;
};

type testType1 = {
  standard: number;
};

// example: schema of students details
type testType2_intersection0 = testType0 & testType1;

// student initialisation with schema type
const intersection1: testType2_intersection0 = {
  division: "division D", //!
  standard: 67, //!
};

// type aliases........