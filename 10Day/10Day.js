// Activity 10: Basic Event Handling
// Task 1
const task1Para = document.getElementsByTagName("p")[0];
const task1Btn = document.getElementById("task1Btn");

task1Btn.addEventListener("click", () => {
  task1Para.textContent =
    "task1Para text is changed by click event of below btn";
});

// Task 2
const task2Img = document.getElementById("task2Img");

task2Img.addEventListener("dblclick", function () {
  task2Img.classList.toggle("hidden");
});

// Activity 2: Mouse Events
// Task 3
const task3and4Div = document.getElementById("task3and4Div");

task3and4Div.addEventListener("mouseover", function () {
  task3and4Div.style.backgroundColor = "red";
});

// Task 4
task3and4Div.addEventListener("mouseout", function () {
  task3and4Div.style.backgroundColor = "";
});

// Activity 3: Keyboard Events
// Task 5
const task5Input = document.getElementById("task5Input");

task5Input.addEventListener("keydown", function (e) {
  console.log(e.code);
});

// Task 6
const task6Para = document.getElementById("task6Para");

task5Input.addEventListener("keyup", function (e) {
  task6Para.textContent += e.key;
});

// Activity 4: Form Events
// Task 7
const task7Form = document.getElementById("task7Form");

task7Form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target[0].value);

  // e.target[0].value = "";
  task7Form.reset();
});

// Task 8
const task8Select = document.getElementById("task8Select");
const task8Para = document.getElementById("task8Para");

task8Select.addEventListener("change", function () {
  task8Para.textContent = task8Select.value;
});

// Task 9
const task9List = document.getElementById("task9List");

task9List.addEventListener("click", function (e) {
  // console.log(e);
  if (e.target.nodeName === "LI") {
    console.log(e.target.textContent);
  }
});

// Task 10
const task10List = document.getElementById("task10List");
const task10Btn = document.getElementById("task10Btn");

let initial = 5; // one more than default List Items present
task10Btn.addEventListener("click", function () {
  const newListItem = document.createElement("li");
  newListItem.textContent = `${initial}`;
  initial++;

  task10List.appendChild(newListItem);
});

const observer = new MutationObserver(function (mutationsList) {
  console.log(mutationsList);
  for (mutation of mutationsList) {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      for (node of mutation.addedNodes) {
        if (node.nodeName === "LI") {
          console.log(node.textContent);
        }
      }
    }
  }
});

const config = { childList: true };

observer.observe(task10List, config);
