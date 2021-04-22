// Import stylesheets
import "./style.css";

const btns = document.querySelectorAll(".button");
const actBtn = document.querySelector(".button-active").innerHTML;
const nonActiveBtn = btns[0].innerHTML;
const header = document.querySelectorAll(".header");
const span = document.querySelectorAll(".span");
const background = document.querySelectorAll(".background");
const content = document.querySelectorAll(".content");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    const content = header[i].nextElementSibling;

    if (content != null) {
      if (content.style.maxHeight) {
        hidePanels();
      } else {
        showPanel(content);

        btns[i].innerHTML = actBtn;
        btns[i].classList.add("bg-indigo");
        span[i].classList.add("text-indigo");
        background[i].classList.add("bg-grey-lightest", "border-indigo");
        background[i].classList.remove("border-transparent");
      }
    }
  });
}
function showPanel(el) {
  hidePanels();
  el.style.maxHeight = el.scrollHeight + "px";
}

// Function to Hide all shown Panels
function hidePanels() {
  for (let i = 0; i < content.length; i++) {
    content[i].style.maxHeight = null;
    btns[i].innerHTML = nonActiveBtn;
    btns[i].classList.remove("bg-indigo");
    btns[i].classList.add("border-grey");
    span[i].classList.remove("text-indigo");
    background[i].classList.remove("bg-grey-lightest", "border-indigo");
  }
}
