const navBar = document.querySelector(".header");
const about = document.querySelector("#about");
const projects = document.querySelector("#myProjects");
const contact = document.querySelector(".profile__contact");
const home = document.querySelector("#background--sunrise");
const profile = document.querySelector("#profile");
// fix navBar
function fixNav() {
  if (window.scrollY > navBar.clientHeight - 16) {
    navBar.classList.add(`fixed`);
  } else {
    navBar.classList.remove(`fixed`);
  }
}

window.addEventListener("scroll", fixNav);

// scroll to the desired element

function onclick(event) {
  const id = event.target.dataset.target;
  const targetElement = document.querySelector(`${id}`);
  console.log(targetElement);
  targetElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

navBar.addEventListener("click", onclick);

contact.addEventListener("click", onclick);

// Home to be transparent

function transparent() {
  profile.classList.add("transparent");
  profile.style.opacity = 1 - window.scrollY * 0.003;
}

window.addEventListener("scroll", transparent);
