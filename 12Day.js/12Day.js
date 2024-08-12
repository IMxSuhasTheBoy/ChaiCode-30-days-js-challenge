// Activity 1: Basic error Handling with Try-Catch
// Task 1
function task1() {
  throw new Error("task1 error");
}

// try {
//   task1();
// } catch (error) {
//   console.log(error.message);
// }

// Task 2
function task2(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("task2 error: denominator cannot be zero");
  }
  return numerator / denominator;
}

// try {
//   console.log(task2(10, 0));
// } catch (error) {
//   console.log(error.message);
// }

// Activity 2: Finally Block
// Task 3
// try {
//   console.log("try block");
// } catch (error) {
//   console.log("catch block");
// } finally {
//   console.log("finally block");
// }

// Activity 3: Custom Error Objects
// Task 4
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.stack = new Error().stack;
  }
}

function task4() {
  throw new CustomError("Task 4: extended error");
}

// try {
//   task4();
// } catch (error) {
//   console.log(error.message);
//   console.log(error.stack);
//   console.log(error.name);
// }

// Task 5
function task5(username) {
  if (!username.trim()) {
    throw new CustomError("Task 5: string is empty");
  }
}

// try {
//   task5(" ");
// } catch (error) {
//   console.log(error.message);
// }

// Activity 4: Error Handling in Promises
// Task 6
function task6() {
  const random = Math.floor(Math.random() * 2);

  return new Promise((resolve, reject) => {
    if (random >= 1) {
      resolve("task6 success");
    } else {
      reject("task6 failure");
    }
  });
}

// task6()
//   .then((res) => {
//     console.log("res: ", res);
//   })
//   .catch((error) => {
//     console.log("error: ", error);
//   });

// Task 7
async function handlePromise() {
  try {
    const res = await task6();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

// handlePromise();

// Activity 5: Graceful Error Handling in Fetch
// Task 8
fetch("https://catfact.ninja/fact")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(`DATA: ${data}`);
  })
  .catch((err) => console.log(`ERROR: ${err}`));

// Task 9
async function fetchData() {
  try {
    const data = await fetch("https://catfact.ninja/fact");
    // console.log(await data.json());
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}
