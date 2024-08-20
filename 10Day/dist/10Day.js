"use strict";
/** Activity 10: Basic Event Handling */
// Task 1
const paraElemTask01 = document.getElementById("task01_para");
const btnElemTask01 = document.getElementById("task01_btn");
btnElemTask01?.addEventListener("click", () => {
    if (paraElemTask01)
        paraElemTask01.textContent =
            "paraElemTask01 text content is dynamically changed! (click event)";
});
//
//
//
//
//
//
//
//
// Task 2
const imgElemTask02 = document.getElementById("task02_img");
imgElemTask02?.addEventListener("dblclick", function () {
    // imgElemTask02.classList.toggle("hidden");
    /** Using the opacity
     *  instead of visibility:hidden on this element,
     *  cause clicking on the space where the element is will trigger nothing*/
    if (imgElemTask02.style.opacity === "0") {
        imgElemTask02.style.opacity = "1";
        return false;
    }
    imgElemTask02.style.opacity = "0";
});
//
//
//
//
//
//
//
//
/** Activity 2: Mouse Events */
// Task 3
const divElemTask01and04 = document.getElementById("task03_04_div");
divElemTask01and04?.addEventListener("mouseover", function () {
    divElemTask01and04.style.backgroundColor = "red";
});
//
//
//
//
//
//
//
//
// Task 4
divElemTask01and04?.addEventListener("mouseout", function () {
    divElemTask01and04.style.backgroundColor = "";
});
//
//
//
//
//
//
//
//
/** Activity 3: Keyboard Events */
// Task 5
const inputElemTask05 = document.getElementById("task05_input");
const paraElemTask05 = document.getElementById("task05_keyview_para");
inputElemTask05?.addEventListener("keydown", function (e) {
    console.log(e.code);
    if (paraElemTask05) {
        if (e.code == "Space" || e.code == "Enter") {
            paraElemTask05.textContent += "\n";
            return false;
        }
        if (e.code == "Backspace") {
            paraElemTask05.textContent =
                paraElemTask05.textContent?.slice(0, -1) ?? "" + e.key;
            return false;
        }
        paraElemTask05.textContent += e.key;
    }
});
//
//
//
//
//
//
//
//
// Task 6
const paraElemTask06 = document.getElementById("task06_para");
if (paraElemTask06 && paraElemTask05) {
    //
    inputElemTask05?.addEventListener("keyup", function (e) {
        //
        if (e.code == "Space" || e.code == "Enter") {
            paraElemTask06.textContent += "\n";
            return false;
        }
        if (e.code == "Backspace") {
            paraElemTask06.textContent =
                paraElemTask06.textContent?.slice(0, -1) ?? "" + e.key;
            return false;
        }
        //
        //
        paraElemTask06.textContent += e.key;
    });
}
//
//
//
//
//
//
//
//
/** Activity 4: Form Events */
// Task 7
const formElemTask07 = document.getElementById("task07_form");
formElemTask07?.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log(e.currentTarget);
    const formData = new FormData(formElemTask07);
    console.log(Object.fromEntries(formData.entries()));
    formElemTask07.reset();
});
//
//
//
//
//
//
//
//
// Task 8
const selectElemTask08 = document.getElementById("task08_select");
const paraElemTask08 = document.getElementById("task08_para");
selectElemTask08?.addEventListener("change", function () {
    paraElemTask08.textContent = selectElemTask08.value;
});
//
//
//
//
//
//
//
//
/** Activity 5: Event Delegation */
// Task 9
const ulElemTask09 = document.getElementById("task09_ul");
ulElemTask09.addEventListener("click", function (e) {
    // console.log(e.target);
    const clickedListItem = e.target;
    // if (clickedListItem.nodeName === "LI")
    if (clickedListItem instanceof HTMLLIElement) {
        console.log(clickedListItem.textContent);
    }
});
/** Note : To handle events on a parent element, rather than attaching separate event listeners to each child element.
 * By attaching a single event listener to a parent element, we avoid the need to attach separate listeners to each child element.
 * Event delegation can improve performance by reducing the number of event listeners in the DOM.
 * Event delegation can simplify our code by reducing the number of event listeners we need to manage.
 */
//
//
//
//
//
//
//
//
// Task 10
const task10List = document.getElementById("task10List");
const task10Btn = document.getElementById("task10Btn");
let initial = 5; // one more than default List Items present
task10Btn.addEventListener("click", function () {
    const newListItem = document.createElement("li");
    newListItem.setAttribute("class", "task10_li");
    newListItem.setAttribute("title", "task10_li");
    newListItem.textContent = `${initial} dynamic li elem event deligation`;
    initial++;
    task10List.appendChild(newListItem);
});
task10List.addEventListener("click", function (e) {
    if (e.target instanceof HTMLLIElement &&
        e.target.getAttribute("title") === "task10_li") {
        console.log(`${e.target.textContent}`);
    }
});
/*

const observer = new MutationObserver(function (
  mutationsList: MutationRecord[]
) {
  console.log(mutationsList);
  for (const mutation of mutationsList) {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      for (const node of mutation.addedNodes) {
        if (node.nodeName === "LI") {
          console.log(node.textContent);
          node.addEventListener("click", function (e: Event) {
            console.log(e.target);
            const clickedListItem = e.target as HTMLElement;

            if (clickedListItem instanceof HTMLLIElement) {
              console.log(clickedListItem.textContent);
            }
          });
        }
      }
    }
  }
});

const config = { childList: true };

observer.observe(task10List, config);

*/
