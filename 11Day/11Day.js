// Activity 1: Understanding Promises
// Task 1
// const task1 = new Promise((resolve, reject) => {
//   try {
//     setTimeout(() => {
//       resolve("task1 resolved");
//     }, 2000);
//   } catch (error) {
//     reject("task1 rejected");
//   }
// });

// task1
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Task 2
// const task2 = new Promise((resolve, reject) => {
//   try {
//     setTimeout(() => {
//       const testResponse = fetch("https://api.fakeurl.com/fakeurl/fakeurl");
//       resolve(testResponse);
//     }, 2000);
//   } catch (error) {
//     reject("task2 rejected");
//   }
// });

// task2
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

/*
// Activity 2: chaining Promises
// Task 3
function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching data from server 1...");
      setTimeout(() => {
        resolve("Data from server 1");
      }, 3000);
    }, 1);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching data from server 2...");

      setTimeout(() => {
        resolve("Data from server 2");
      }, 4000);
    }, 7000);
  });
}

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching data from server 3...");
      setTimeout(() => {
        resolve("Data from server 3");
      }, 5000);
    }, 1);
  });
}

function logMessage(message) {
  console.log(message);
}

fetchData1()
  .then((data) => {
    logMessage(data);
    return fetchData2();
  })
  .then((data) => {
    logMessage(data);
    return fetchData3();
  })
  .then((data) => {
    logMessage(data);
  })
  .catch((error) => {
    console.error(error);
  });

*/

// Activity 3: Using Async/Await
// Task 4
async function waitForPromise() {
  console.log("wait for promise to resolve...");

  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success: Promise resolved");
    }, 5000);
  });

  console.log(`result: ${result}`);
}

// waitForPromise();

// Task 5
async function waitForPromise2() {
  console.log("wait for promise to resolve...");
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Failure: Promise rejected");
      }, 5000);
    });
  } catch (error) {
    console.error(error);
  }
}

// waitForPromise2();

// Activity 4: Fetching Aata from an API
// Task 6
async function fetchData() {
  console.log("wait for data from fetch api ...");
  const response = await new Promise((resolve, reject) =>
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        resolve(data);

        console.log(data[0]);
      })
      .catch((error) => reject(error))
  );
}

// fetchData();

// Task 7
async function fetchData2() {
  try {
    console.log("wait for data from fetch api ...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data[0].name);
  } catch (error) {
    console.error(error);
  }
}

// fetchData2();

// Activity 5 Concurrent Promises
// Task 8
async function fetchData3() {
  const response = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/users"),
  ]);

  const data = await Promise.all(response.map((res) => res.json()));
  console.log(data.forEach((d) => console.log(d[0])));
}

// fetchData3();

// Task 9
async function fetchData4() {
  const response = await Promise.race([
    fetch("https://jsonplaceholder.typicode.com/albums"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/users"),
  ]);

  console.log(response.url);

  const data = await response.json();
  console.log(data[0]);
}

fetchData4();
