// need of constructor in a class

/* step  
 create class 
 create constructor
 define properties with access modifiers*
 accept parameter values in constrouctor if needed
 give context (this) to the properties in constructor to initialize with parameter values
*/
class Tiffin {
  //properties
  public brand: string;

  //initializing works (parameter values)
  constructor(brandName: string) {
    this.brand = brandName;
  }

  //...rest of the code...
}

//instantiation & arguements for constructor
const tiffinOne = new Tiffin("toy-tastic");

////////////////////////////////////////////
// better syntax and public private

// enum PaperSize {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }

type PaperSize = "small" | "medium" | "large";

class Paper {
  constructor(public size: PaperSize) {
    this.size = size;
  }

  recheckSize() {
    console.log(this.size);
  }
}

// const paperOne = new Paper(PaperSize.small);
const paperOne = new Paper("small");
// paperOne.size = "large"; //!
// paperOne.recheckSize();

///////////////////////////////////////////////
// access modifier protected / readonly

class Account {
  protected balance: number = 10000;
}

class Bank extends Account {
  fetchBalance() {
    console.log(`fetched balance: ${this.balance}`);
  }
}

const bankOP = new Bank();
bankOP.fetchBalance();
///////////////////////////////////////////////
// const AccountOne = new Account();
// console.log(AccountOne.balance); //!
// AccountOne.balance = 20000; //!
