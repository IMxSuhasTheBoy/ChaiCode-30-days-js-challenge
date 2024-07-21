// Activity 1: Selecting and Manipulating ELements
// Task 1
const h1Element = document.getElementById("h1Task1");
h1Element.textContent = "ChaiCode by Sir, Hitesh Chaudhary";

// Task 2
const divElement = document.getElementsByClassName("divTask2");
divElement[0].style.backgroundColor = "orangered";

// Activity 2: Creating and Appending Elements
// Task 3
const divElementTask3 = document.createElement("div");
divElementTask3.textContent = "30 Days JavaScript Challenge";
document.body.appendChild(divElementTask3);

// Task 4
const liElementTask4 = document.createElement("li");
liElementTask4.textContent = "Second li element appended";
document.body.childNodes[5].appendChild(liElementTask4);

// Activity 3: Removing Elements
// Task 5
document.getElementsByTagName("footer")[0].remove();

// Task 6
const divOfParagraphs = document.getElementById("divOfParagraphs");

divOfParagraphs.removeChild(divOfParagraphs.lastElementChild);

// Activity 4: Modifying Attributes and Classes
//Task 7
let toggleImgSrc = true;
function task7() {
  if (toggleImgSrc === true) {
    document.getElementById("task7").src =
      "https://img.freepik.com/free-photo/coffee-mug-table-with-cookies-plate-spoon_23-2148808591.jpg?ga=GA1.1.134289003.1721546632&semt=sph";
    toggleImgSrc = !toggleImgSrc;
  } else {
    document.getElementById("task7").src =
      "https://img.freepik.com/free-vector/minimal-scandi-style-geometric-line-art-design_1048-20281.jpg?w=360&t=st=1721546680~exp=1721547280~hmac=f244e325eba743b88609996d4027768b27e127c2b8b8558ef033f38763edb522";
    toggleImgSrc = !toggleImgSrc;
  }
}

//Task 8
document.getElementById("h1Task1").classList.add("task8");

document.getElementsByClassName("divTask2")[0].classList.remove("font-large");

// Activity 5: Event Handling
// Task 9
function task9() {
  document.getElementById("divOfParagraphs").children[1].textContent =
    "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
}

// Task 10
divOfParagraphs.addEventListener("mouseover", function () {
  divOfParagraphs.style.border = "5px solid black";
});

divOfParagraphs.addEventListener("mouseleave", function () {
  divOfParagraphs.style.removeProperty("border");
});
