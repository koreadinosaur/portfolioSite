const navBar = document.querySelector(".header");

console.log(navBar.clientHeight);
console.log(window.screenY);

function fixNav() {
  if (window.scrollY > navBar.clientHeight - 16) {
    navBar.classList.add(`fixed`);
  } else {
    navBar.classList.remove(`fixed`);
  }
}

window.addEventListener("scroll", fixNav);
