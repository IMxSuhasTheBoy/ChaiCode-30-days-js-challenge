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

//* primitive type aliases-------------------------
type TestTypeAliases0 = boolean;
const exampleTypeAliases0: TestTypeAliases0 = true;

type TestTypeAliasesUnion0 = string | number;
const Age: TestTypeAliasesUnion0 = "34";

//* object type aliases----------------------------
type Person = {
  username: string;
  password: string;
  birthDate: Date;
  isAdmin: boolean;
  isLoggedIn: boolean;
};

let PersonOne: Person = {
  birthDate: new Date(),
  isAdmin: false,
  isLoggedIn: true,
  password: "itsapassword",
  username: "person_one",
};

//* Interface
interface TestIUserSchema {
  username: string;
  password: string;
  isAdmin: boolean;
  lastLoggedIn: Date;
}

function testIUserSchema(user: TestIUserSchema) {
  console.log(user);

  // user.isAdmin =
}

// testIUserSchema({})

// interface TestIUserSchema {
//   fullName: string;
// }
///////////////////////////////////////////////////

interface TestIJuiceSchema {
  name: string;
  price: number;
}

interface TestIFruitJuice extends TestIJuiceSchema {
  fruitName: string;
}
interface TestIVeggieJuice extends TestIJuiceSchema {
  veggieName: string;
}

function testGiveMeJuice(veggi: TestIVeggieJuice) {
  // veggi.
}

// testGiveMeJuice({})

/////////////////////////////////////////////////////
// class (its a kind of blueprint)

class Bag {
  // properties
  brand = "confidence";
  varient = "grey";
  capacity = 10;
  isLightOn = false;
  isBagLocked = false;

  // methods
  toggleLight() {
    this.isLightOn = !this.isLightOn;
    console.log(`light toggled ${this.isLightOn}`);
  }

  toggleLock(whosBag: string) {
    this.isBagLocked = !this.isBagLocked; // this kw refers to the class property isBagLocked
    console.log(`lock toggled ${this.isBagLocked} of ${whosBag}`);
  }
}

// class instantiation (instance object)
const suhasBag = new Bag();
console.log(suhasBag);
// suhasBag.toggleLock("suhas");
// suhasBag.toggleLock("suhas");
console.log(suhasBag);

type Data = string | null;

///////////////////////////////////////////////////////////////////
class Ssd {
  data: Data = null;

  writeData(data: Data) {
    if (data === null) {
      throw new Error("data cannot be null");
    }

    console.log(`request received to store: ${data}`);
    this.data = `|${data} : ${new Date().toLocaleString()}|`;
    console.log(`data stored: ${this.data}`);
  }

  readData() {
    console.log(`data read: ${this.data}`);
  }
}

const ssd_One = new Ssd();
ssd_One.writeData("content for _One");

ssd_One.readData();
