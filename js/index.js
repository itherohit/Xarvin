const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

AOS.init();

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
});

const navBar = document.querySelector('.header');
window.onscroll = () => {
    if (window.scrollY >= 100) {
        navBar.classList.add('nav-bg');
    }
    if (window.scrollY <= 100) {
        navBar.classList.remove('nav-bg');
    }
}
