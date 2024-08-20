/** Activity 1: Selecting and Manipulating ELements */
// Task 1
const h1ElemTask01 = document.getElementById("task01_h1");

if (h1ElemTask01)
  h1ElemTask01.textContent =
    "|JS Challenge Day 9| - (dynamically changed text content.)";

//
//
//
//
//
//
//
//
// Task 2
const divElemTask02 = document.getElementsByClassName("task02_div");

(divElemTask02[0] as HTMLElement).style.backgroundColor = "orange";
// alternative
const divElemTask02Alt = document.querySelector(".task02_div");

(divElemTask02Alt as HTMLElement).style.backgroundColor = "orange";
//
//
//
//
//
//
//
//
/** Activity 2: Creating and Appending Elements */
// Task 3
const divElemTask03 = document.createElement("div");

divElemTask03.textContent = "task3_Div dynamically created & appended element.";
document.body.appendChild(divElemTask03);

//
//
//
//
//
//
//
//
// Task 4
const ulElemTask04 = document.getElementById("task04_ul");
const liElemTask04 = document.createElement("li");

liElemTask04.textContent = "Second li element - (dynamically appended)";
ulElemTask04?.appendChild(liElemTask04);

//
//
//
//
//
//
//
//
/** Activity 3: Removing Elements */
// Task 5
const divElemTask05 = document.getElementById("task05_div");
divElemTask05?.remove();

//
//
//
//
//
//
//
//
// Task 6
const divElemTask06 = document.getElementById("task06_div");

if (divElemTask06 && divElemTask06.children) {
  divElemTask06?.removeChild(
    divElemTask06.children[divElemTask06?.children.length - 1]
  );
}

//
//
//
//
//
//
//
//
/** Activity 4: Modifying Attributes and Classes */
//Task 7
let toggleImgSrc = true;
function task07_click() {
  const task07_img = document.querySelector("#task07_img");
  // task07_img as HTMLImageElement;
  // task07_img instanceof HTMLImageElement;

  if (toggleImgSrc === true) {
    if (task07_img && (task07_img as HTMLImageElement).src) {
      (task07_img as HTMLImageElement).src =
        "https://img.freepik.com/free-photo/coffee-mug-table-with-cookies-plate-spoon_23-2148808591.jpg?ga=GA1.1.134289003.1721546632&semt=sph";
      toggleImgSrc = !toggleImgSrc;
    }
  } else {
    (task07_img as HTMLImageElement).src =
      "https://img.freepik.com/free-vector/minimal-scandi-style-geometric-line-art-design_1048-20281.jpg?w=360&t=st=1721546680~exp=1721547280~hmac=f244e325eba743b88609996d4027768b27e127c2b8b8558ef033f38763edb522";
    toggleImgSrc = !toggleImgSrc;
  }
}

//
//
//
//
//
//
//
//
//Task 8
h1ElemTask01?.classList.add("task08_class_color");

h1ElemTask01?.classList.remove("task08_class_font_large");

//
//
//
//
//
//
//
//
/** Activity 5: Event Handling */
// Task 9
function task09_click() {
  const task09_para = document.getElementById("task09_para");
  if (task09_para)
    task09_para.textContent =
      "This paragraph element text content is changed! You clicked button (click event).";
}

//
//
//
//
//
//
//
//
// Task 10
const divElemTask10 = document.getElementById("task10_div");

divElemTask10?.addEventListener("mouseover", function () {
  divElemTask10.style.border = "5px solid brown";
});

divElemTask10?.addEventListener("mouseleave", function () {
  divElemTask10.style.removeProperty("border");
});
